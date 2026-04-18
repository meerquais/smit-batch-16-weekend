import { auth , sendEmailVerification} from "../config.js";


document.getElementById("verifyBtn").addEventListener("click" , async ()=>{
  const user = auth.currentUser;

  if(user){
    try {
      await sendEmailVerification(user)
      Swal.fire({
  title: "Verification Email Sent!",
  text: "Verification Email Sent to " + user.email,
  icon: "success"
});
    } catch (error) {
       Swal.fire({
  title: "Error",
  text: error.message,
  icon: "error"
});
    }
  }else{
    Swal.fire({
  title: "No User Logged In",
  icon: "error"
});
  }
})