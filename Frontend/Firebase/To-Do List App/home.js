import { db,collection , getDocs , query , orderBy, doc } from "./firebase/firebase.js";



async function  loadFeed() {

  const feed = document.getElementById("feed")
  
  const q = query(collection(db,"posts"), orderBy("createdAt", "desc"));

  const snapShot = await getDocs(q)

  snapShot.forEach(element => {
    const div = document.createElement("div");
    div.textContent = element.data().text;
    feed.appendChild(div)
  });

}

loadFeed()