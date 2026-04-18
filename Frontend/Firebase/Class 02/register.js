import { auth , createUserWithEmailAndPassword } from "./firebase.js";



document.getElementById("signupBtn").addEventListener("click" , async ()=>{


  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  

  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email,password);

    console.log("SignUp! Sccessfully!" , userCredential.user);

    alert("User Created: " + userCredential.user.email);   
    
  } catch (error) {
    console.log("Error: " , error.message);
    alert(error.message)    
  }
})