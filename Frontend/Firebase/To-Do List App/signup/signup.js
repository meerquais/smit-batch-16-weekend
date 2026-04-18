import { auth , db, GoogleAuthProvider , createUserWithEmailAndPassword , signInWithPopup , doc, setDoc } from "../firebase/firebase.js";

const btn = document.getElementById("signupBtn");
const googleBtn = document.getElementById("googleBtn");

const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const loc = document.getElementById("location");
const password = document.getElementById("password");


btn.addEventListener("click" , async ()=>{

  const fullName = document.getElementById("fullname").value;
const email = document.getElementById("email").value;
const loc = document.getElementById("location").value;
const password = document.getElementById("password").value;


try {

  const res = await createUserWithEmailAndPassword(auth , email , password)

  await setDoc(doc(db,"users" , res.user.uid) , {
    fullName,
    email,
    loc,
    role:"user",
    isVerified: false,
    createdAt: Date.now()
  });


  
  Swal.fire({
  title: "Account Created",
  text: "Wait for admin verification!",
  icon: "success"
});
  setTimeout(()=>{
window.location.href = "../login/login.html";  
  }, 5000) 

} catch (error) {
  Swal.fire({
  title: "Error",
  text: error.message,
  icon: "error"
});
}
});


googleBtn.addEventListener("click", async ()=>{
  const fullName = document.getElementById("fullname").value;
const email = document.getElementById("email").value;
const loc = document.getElementById("location").value;

  try {
const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);

    await setDoc(doc(db,"users", res.user.uid),{
      fullname:res.user.displayName || "",
      email: res.user.email,
      location: "",
      role:"user",
      isVerified:false,
      createdAt:Date.now()
    })

    Swal.fire({
  title: "Google Account Saved",
  text: "Wait for admin Verification!",
  icon: "success"
});

setTimeout(()=>{
  window.location.href = "../login/login.html";
}, 10000)
    
  } catch (error) {
    Swal.fire({
  title: "Error",
  text: error.message,
  icon: "error"
});
  }
})