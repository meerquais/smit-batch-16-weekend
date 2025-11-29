
let btn = document.getElementById("btn");



// btn.onclick = function(){

// }


btn.addEventListener("click", function(){
let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [] ;



  
  for(var i =0; i < users.length; i++){
    if(users[i].email === email){
      alert("User Already Exists!")
      return
    }
  }
let user = {
    id: new Date().getTime(),
    username:username,
    email:email,
    password:password,
  }

  users.push(user);
  localStorage.setItem("users" , JSON.stringify(users));
  alert("Sign Up Successfully!");

  window.location.href = "login.html"



})