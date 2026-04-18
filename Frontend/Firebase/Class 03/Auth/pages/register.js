import { auth , createUserWithEmailAndPassword } from "../config.js";


document.getElementById("signupBtn").addEventListener("click" , async ()=>{

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  try {

    const user = await createUserWithEmailAndPassword(auth , email , password);
    Swal.fire({
  title: "Signup Successful",
  icon: "success",
  text:user.user.email,
  draggable: false
});


  } catch (error) {
    Swal.fire({
  title: "Signup Failed!",
  icon: "error",
  text:error.message,
  draggable: false
});
  }



})