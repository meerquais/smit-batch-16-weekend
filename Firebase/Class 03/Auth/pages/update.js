import { auth , updateProfile , onAuthStateChanged } from "../config.js";

document.getElementById("updateBtn").addEventListener("click" , async ()=>{
  const user = auth.currentUser;
  const name = document.getElementById("name").value;
  const photo = document.getElementById("photo").value;

  console.log(user);
  


  if(user){
    try {
      await updateProfile(user, {
        displayName: name,
        photoUrl: photo
      });
      Swal.fire({
  title: "Profile updated!",
  text: "Profile updated Successfully!",
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
  title: "No User Logged in!",
  icon: "error"
});
  }
})

onAuthStateChanged(auth , (user) => {
  if (user) {
    const displayNamePara = document.getElementById("displayName");
    const emailPara = document.getElementById("email");
    const emailVerifiedPara = document.getElementById("emailVerified");

    displayNamePara.innerText = user.displayName || "No Display Name";
    emailPara.innerText = user.email || "No Email";
    emailVerifiedPara.innerText = user.emailVerified ? "Verified" : "Not Verified";


    const photoURLImg = document.getElementById("photoURL");
    if (user.photoURL) {
      photoURLImg.src = user.photoURL;
    } else {
      photoURLImg.src = 'default-avatar.png'; 
    }

    console.log("User UID: ", user.uid); 
  } else {
    console.log("No user is signed in.");
  }
});

