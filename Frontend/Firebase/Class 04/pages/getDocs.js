import { db, collection , getDocs } from "../config.js";



const readAllBtn = document.getElementById("readAllBtn");
const out = document.getElementById("out");


readAllBtn.addEventListener("click" , async ()=>{

  try {
    
    const colRef = collection(db, "users");
    const snapshot = await getDocs(colRef);

    const results = [];

    snapshot.forEach((doc)=> {
     return results.push({id:doc.id, ...doc.data()})
    })

    out.textContent = JSON.stringify(results, null , 2);
  } catch (error) {

    out.textContent = "Error: " + error.message;    
  }
})