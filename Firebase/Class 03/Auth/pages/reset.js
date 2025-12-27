import { auth, sendPasswordResetEmail } from "../config.js";


document.getElementById("resetBtn").addEventListener("click", async () => {

  const email = document.getElementById("email").value;

  try {
    await sendPasswordResetEmail(auth, email)

    Swal.fire({
      title: "Password Reset!",
      text: "Password reset email sent to " + email,
      icon: "success"
    });


  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: error.message,
      icon: "Error"
    });
  }

})