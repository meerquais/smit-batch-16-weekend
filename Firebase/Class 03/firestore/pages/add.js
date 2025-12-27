import { db , doc , setDoc } from "../config.js";



const addBtn = document.getElementById("addBtn");

const out = document.getElementById("out");


addBtn.addEventListener("click", async ()=>{

  const id = document.getElementById("docId").value.trim();
  const value = document.getElementById("docValue").value;

  const obj = {
     value,
      createdAt: Date.now()
  }


  if(!id){
    out.textContent = "Please enter an ID";
  }

  try {

    await setDoc(doc(db, "users" , id) , obj);

    out.textContent = `Document created with ID: ${id}`
    
  } catch (error) {

    out.textContent = "Error: " + error.message;
    
  }




})