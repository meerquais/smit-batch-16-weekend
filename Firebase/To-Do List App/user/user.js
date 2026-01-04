import { auth , db , onAuthStateChanged,
        collection,
        deleteDoc,
        addDoc,
        query,
        where,
        orderBy,
        getDocs,
        updateDoc,
        doc,
        serverTimestamp
 } from "../firebase/firebase.js";


let uid = null;

const addBtn = document.getElementById("addBtn");


onAuthStateChanged(auth, async (user)=>{

  console.log(user);
  

  if(!user){
   return window.location.href = "../login/login.html";
  }

  uid = user.uid;
  loadPosts()
})

async function loadPosts() {
  
  const posts = document.getElementById("posts");

  posts.innerHTML = "";

  const q = query(collection(db,"post"), where("uid", "==" , uid), orderBy("createdAt" , "desc"));

  console.log("triggered!");
  


  const snap = await getDocs(q);

  snap.forEach((p)=>{
    const data = p.data();

    const div = document.createElement("div");
    div.classList.add("post-card"); // Add this

    div.textContent = `${data.text}`;

    const edit = document.createElement("button");
    edit.classList.add("edit-btn");

    edit.textContent = "Edit";

    edit.onclick = async ()=>{
      const val = prompt("Update Task" , data.text);

      if(!val) return;

      await updateDoc(doc(db,"posts" , p.id), {
        text:val,
        updateAt : serverTimestamp()
      });

      loadPosts();
    }


    const del = document.createElement("button");
    del.classList.add("delete-btn");
    del.textContent = "Delete";

    del.onclick = async ()=>{
      await deleteDoc(doc(db, "posts" , p.id));
      loadPosts();
    };

    div.append(edit , del);
    posts.appendChild(div);
  });
};

addBtn.addEventListener("click", async ()=>{


  console.log(uid);
  
  

  const task = document.getElementById("task");
  await addDoc(collection(db,"posts") , {
    uid,
    text:task.value,
    createAt: serverTimestamp(),
    updateAt: null
  });



  task.value = "";
  loadPosts();
})