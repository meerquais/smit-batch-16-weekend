import {auth , db , onAuthStateChanged , collection , getDocs, updateDoc , doc} from "../firebase/firebase.js"



onAuthStateChanged(auth, async (user)=>{
  if(!user){
    return window.location.href = "../login/login.html";
  }

  const list = document.getElementById("users");

  list.innerHTML = "";

  const snap = await getDocs(collection(db,"users"));

  snap.forEach((u)=>{
    const data = u.data();

    const div = document.createElement("div");
    div.classList.add("user-card");

    div.textContent = `${data.fullName} | ${data.email} | Verified : ${data.isVerified}`;

    const toggle = document.createElement("button");
    toggle.classList.add("btn-toggle");

    toggle.textContent = data.isVerified ? "Unverify" : "Verify";

    toggle.onclick = async ()=>{
      await updateDoc(doc(db,"users",u.id) , {
        isVerified:! data.isVerified
      });

      Swal.fire({
  title: "Updated",
  text: "Status Changed",
  icon: "success"
});
location.reload()
    }

    div.appendChild(toggle);
    list.appendChild(div);
    


  })




})