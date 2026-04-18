let btn = document.getElementById("btn");


btn.addEventListener("click" , ()=>{
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  for(var i  = 0 ; i < users.length; i++){
    if(users[i].email === email && users[i].password === password){
    let currentUser = users[i].username
    localStorage.setItem("currentUser" , JSON.stringify(currentUser))

      alert("Login Successfully!");
      window.location.href = "dashboard.html"
    }
  }






})