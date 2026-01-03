import { auth , db , GoogleAuthProvider , signInWithEmailAndPassword , signInWithPopup , doc, getDoc,setDoc } from "../firebase/firebase.js";


const loginBtn = document.getElementById("loginBtn");
const googleBtn = document.getElementById("googleBtn");


async function handleRedirect(userId) {
    const snap = await getDoc(doc(db,"users" , userId));

    if(!snap.exists()) return;

      const data = snap.data();

      if(!data.isVerfied){
        Swal.fire({
  title: "Not Verified",
  text: "Admin has not yet Approved.",
  icon: "info"
});
return;
      }


      if(data.role === "admin"){
        window.location.href = "../admin/admin.html";
      }else{
        window.location.href ="../user/user.html"
      }

}


loginBtn.addEventListener("click" , async ()=>{

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
  try {
    const res = await signInWithEmailAndPassword(auth , email , password);

    await handleRedirect(res.user.uid)

  } catch (error) {
    Swal.fire({
  title: "Error",
  text: error.message,
  icon: "error"
});
  }
});


googleBtn.addEventListener("click" , async()=>{

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const provider = new GoogleAuthProvider();

try {
   const res = await signInWithPopup(auth, provider);

   await setDoc(doc(db,"users", res.user.uid), {
    email:res.user.email,
    fullname:res.user.displayName || "",
    role:"user",
    isVerified:false
   })

   await handleRedirect(res.user.uid)
} catch (error) {
  Swal.fire({
  title: "Error",
  text: error.message,
  icon: "error"
});
}


})

