import { auth , signOut } from "../config.js";


document.getElementById("logoutBtn").addEventListener("click" , async ()=>{

  try {
    await signOut(auth)
    Swal.fire({
  title: "User Logged out successfully!",
  icon: "success"
});
  } catch (error) {
    Swal.fire({
  title: "Error",
  icon: "success",
  text: error.message
});
  }
})