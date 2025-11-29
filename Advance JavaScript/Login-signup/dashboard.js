let currentUser = JSON.parse(localStorage.getItem("currentUser"));



if(!currentUser){
  window.location.href = 'login.html'
}


let logout = document.getElementById("btn-logout");


logout.addEventListener("click", ()=>{
  
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  localStorage.removeItem("currentUser");
  window.location.reload

  if(!currentUser){
    window.location.href = "login.html"
    
  }



})