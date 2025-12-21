import { auth , sendEmailVerification, signInWithEmailAndPassword , signOut } from "./firebase.js";


document.getElementById("loginBtn").addEventListener("click" , async ()=>{


  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
const user = auth.currentUser;
  if(!user){
try {
    const userCredential = await signInWithEmailAndPassword(auth,email,password);

    console.log("Login! Sccessfully!" , userCredential.user);

    alert("User logged in: " + userCredential.user.email);   
    
  } catch (error) {
    console.log("Error: " , error.message);
    alert(error.message)    
  }
  }else{
    alert("A User is Already Logged in!")
  }

  if(user){
    try {
      await sendEmailVerification(user);
      alert("Verification email sent to " + user.email);
    } catch (error) {
      alert(error.message)
    }
  }

  
})

document.getElementById("logoutBtn").addEventListener("click" , async ()=>{
  try {
    await signOut(auth);
    alert("User logged out Successfully!")
  } catch (error) {
    console.log("Error: " , error.message);
    alert(error.message)
    
  }
})


