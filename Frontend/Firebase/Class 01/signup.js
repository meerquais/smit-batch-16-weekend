import { auth } from "./firebase.js";

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js" ; 


document.getElementById("signupBtn").addEventListener('click' , async ()=>{

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  try {

    const userCredential = await createUserWithEmailAndPassword(auth , email , password);

    console.log("Sign up Successful!", userCredential.user );

    alert("User Created: " + userCredential.user.email);   
    
  } catch (error) {
    console.error("Error: " , error.message);
    alert(error.message)
  }





})