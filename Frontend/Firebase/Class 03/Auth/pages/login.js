import { auth , signInWithEmailAndPassword  , GoogleAuthProvider , signInWithPopup } from "../config.js";

document.getElementById("loginBtn").addEventListener("click" , async ()=>{


  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  try {

    const userCredential = await signInWithEmailAndPassword(auth , email , password)
    Swal.fire({
  title: "Login Successful!",
  text: userCredential.user.email,
  icon: "success"
});
    
  } catch (error) {
    Swal.fire({
  title: "Login Failed",
  text: error.message,
  icon: "error"
});
  }
});





document.getElementById("googleBtn").addEventListener("click", async ()=>{
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth , provider);
    Swal.fire({
  title: "Google Login Successful!",
  text: result.user.email,
  icon: "success"
});
  } catch (error) {
    Swal.fire({
  title: "Error",
  text: error.message,
  icon: "error"
});
  }
})