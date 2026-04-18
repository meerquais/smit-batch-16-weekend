import { auth } from "../config.js";


document.getElementById("checkBtn").addEventListener("click" , async ()=>{
  const user = auth.currentUser;

  if(user){
    Swal.fire({
  title: "Current User",
  text: user.email,
  icon: "success"
});
  }else{
    Swal.fire({
  title: "No user is logged in!",
  icon: "error"
});
  }
})