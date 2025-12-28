import { db , addDoc , collection } from "../config.js";

const addAutoBtn = document.getElementById("addAutoBtn");
const out = document.getElementById("out");



addAutoBtn.addEventListener("click" , async ()=>{

  const value = document.getElementById("docValue").value;

  try {

    const docRef = await addDoc(collection(db, "students") , {
      value,
      createdAt: Date.now()
    });
    out.textContent = `Document added with auto ID: ${docRef.id}`
    console.log(docRef);       
  } catch (error) {
    out.textContent = "Error: " + error.message;
  }
})