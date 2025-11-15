console.log("JavaScript Connected!");

// localStorage and Session Storage --> Browser Storage/ client-side

// setItem(Key,Value) --> data store karta hai. 

// getItem(key) --> value lao , agar key nahin hai tho null aayega.

// removeItem(key) --> specific key delete karo.

// clear() -- saara storage clear kardo.

// length aur key(i) -- iterate karne mein madad.



// function signUp(){
 
//    var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;

//   if(name === "" || email === "" || password === ""){
//     alert("Please Fill all Fields!")
//   }else{
//     var user= {
//       name:name,
//       email:email,
//       password:password
//     };

//     localStorage.setItem("userData" , JSON.stringify(user));

//     alert("SignUp Complete!");
//   }

// }

// function login(){

//    var loginEmail = document.getElementById("loginEmail").value;
//   var loginPassword = document.getElementById("loginPassword").value;

//   var data = localStorage.getItem("userData");

//   if(data === null){
//     alert("No user found, please sign up First");
//   }else{

//     var user = JSON.parse(data);

//     if(user.email === loginEmail){

//       if(user.password === loginPassword){
//         alert("Login Successful");
//       }else{
//         alert("Wrong Email or Password!");
//       }

//     }else{
//       alert("Wrong Email or Password!");
//     }

//   }



// }


// var list = [];


// if(localStorage.getItem("todos") !== null){
//   list = JSON.parse(localStorage.getItem("todos"));
//   showTodos()
// }

// function addTodo(){
//   var text = document.getElementById("todoInput").value;

//   if(text === ""){
//     alert("Write something first!")
//   }else{
//     list.push(text)
  


//   localStorage.setItem("todos" , JSON.stringify(list));


//    text = "" ; 

//    showTodos()

//   }
// }


// function showTodos(){
//   var ul = document.getElementById("todoList");

//   ul.innerHTML = "";

//   for(var i = 0;i < list.length; i++){

//     var li = document.createElement("li");

//     li.innerHTML = list[i] + `<button onclick="deleteTodo(${i})">Delete</button>`;
    
//     ul.appendChild(li);

//   }
// }

// function deleteTodo(index){
//   list.splice(index,1);

//   console.log(list);
  

//   localStorage.setItem("todos", JSON.stringify(list));

//   showTodos();
// }


// var count = sessionStorage.getItem("count");

// if(count === null){
//   count = 1;
// }else{
//   count = Number(count) + 1
// }


// sessionStorage.setItem("count", count);

// document.getElementById("msg").innerHTML = "This tab visited " + count + " times.";


// localStorage.setItem("username" , "Meer");

// sessionStorage.setItem("color" , "red");


// var name = localStorage.getItem("username");

// var fav = sessionStorage.getItem("color");


// console.log(name);
// console.log(fav);

// localStorage.removeItem("username");


// localStorage.setItem("username" , "Meer");
// localStorage.setItem("batch" , "16");
// localStorage.setItem("time" , "weekend");

// // localStorage.clear();

// var count = localStorage.length;

// console.log(count);

// var firstKey = localStorage.key(0);

// console.log(firstKey);





var savedMode = localStorage.getItem("mode");

if(savedMode === "dark"){
  document.getElementById("body").classList.add("dark");
}


function toggleMode(){
  var body = document.getElementById("body");


  if(body.classList.contains("dark") === true){
    body.classList.remove("dark");
    localStorage.setItem("mode", "light")
  }else{
    body.classList.add("dark");

    localStorage.setItem("mode", "dark");

  }

}