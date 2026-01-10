import { auth , db , GoogleAuthProvider , signInWithEmailAndPassword , signInWithPopup , doc, getDoc,setDoc } from "../firebase/firebase.js";


const loginBtn = document.getElementById("loginBtn");
const googleBtn = document.getElementById("googleBtn");

async function handleRedirect(userId) {

  const ref = doc(db,"users" , userId);
  const snap = await getDoc(ref);

  console.log(userId);
  console.log(snap.exists());
  console.log(snap.data());


  if(!snap.exists()){
    Swal.fire({
  title: "No Record",
  text: "User Record doesn't exist!",
  icon: "Error"
});
return;
  }

  const data = snap.data();
  if(data.isVerified !== true){
    Swal.fire({
  title: "Not Verified",
  text: "Admin has not yet Approved.",
  icon: "info"
});
return;
  }

  if(data.role ==="admin"){
    window.location.href = "../admin/admin.html"
  }else{
    window.location.href = "../user/user.html"
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

googleBtn.addEventListener("click" , async ()=>{
const provider = new GoogleAuthProvider();

  try {
    const res = await signInWithPopup(auth, provider);
    const userRef = doc(db,"users",res.user.uid);
    const snap = await getDoc(userRef);

    if(!snap.exists()){
      await setDoc(userRef , {
        email:res.user.email,
        fullName: res.user.displayName || "",
        role:"user",
        isVerified:false,
        createdAt:Date.now()
      })
    }

    await handleRedirect(res.user.uid)

  } catch (error) {

    swal.fire({
  title: "Error",
  text: error.message,
  icon: "error"
})
    
  }
})

