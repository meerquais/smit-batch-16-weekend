import { auth , sendPasswordResetEmail } from "../firebase/firebase.js";


const resetBtn = document.getElementById("resetBtn");


resetBtn.addEventListener("click" , async ()=>{

  const email = document.getElementById("email").value;
  try {
     await sendPasswordResetEmail(auth , email);
     Swal.fire({
  title: "Email Sent",
  text: "Check your inbox!",
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