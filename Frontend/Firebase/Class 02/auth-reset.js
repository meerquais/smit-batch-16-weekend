import { auth , sendPasswordResetEmail } from "./firebase.js";

document.getElementById("resetBtn").addEventListener("click" , async ()=>{

  const email = document.getElementById("email").value;

  try {
    await sendPasswordResetEmail(auth , email);
    alert("Password reset email sent to " + email);
  } catch (error) {
    console.log("Error : " , error.message);
    alert(error.message)
        
  }


})