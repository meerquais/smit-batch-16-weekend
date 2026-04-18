import { auth , onAuthStateChanged} from "../config.js";



onAuthStateChanged(auth , (user)=>{
  const status = document.getElementById("status");

  if(user){
    status.innerText = "logged in as " + user.email;
  }else{
    status.innerText = "No user Logged in"
  }

})