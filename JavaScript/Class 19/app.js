console.log("JavaScript Connected!");


var animals = [];  // this is a single comment!

// if(animals){

// }

// if(animals){

// }
// if(animals){

// }


/* multiple lines comment 
if(animals){

}if(animals){

}if(animals){

}
*/


// function greet(user){
//   alert("Welcome " + user);
// }

// function greetUser(){
//   console.log(1);
// }


// function getEmail(){
//   var email = document.getElementById("email").value;
//   console.log(email)
// }


// function checkAddress(fieldId){
//   var value = document.getElementById(fieldId).value;

//   if(value === ""){
//     alert("Email is required!");
//     return false;
//   }else{
//     console.log(value)
//     return true;

//   }
// }

// function requiredEmail(){
//   var val = document.getElementById("email").value;

//   if(val === ""){
//     alert("Email is Required!");
//   }else{
//     console.log(val);
    
//   }
// }

// function emailFormat(){

//   var val = document.getElementById('email').value.trim();

//   if(val === ""){
//     alert("Email is Required!");
//   }

//   var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);

//   if(!emailRegex){
//     alert("Email format is wrong!");
//   }

//   console.log(val)
// }


// function emailFormat(){

//   var value = document.getElementById('email').value.trim();

//   var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);


//   if(value === ""){
//     alert("Email is required!");
//   }else if(!emailRegex){
//     alert("Email format is wrong!");
//   }else{
//     alert(value)
//   }
// }

function emailRequire(){

  var value = document.getElementById("email").value.trim();
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

  var err = document.getElementById("emailErr");

  if(value === ""){
    err.textContent = "Email Required."
  }else if(!emailRegex){
    err.textContent ="Email format is wrong!";
}}