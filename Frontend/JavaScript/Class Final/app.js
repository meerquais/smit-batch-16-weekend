console.log("Js Connected!");

// function checkForSelection(){

//   if(document.getElementById("states").selectedIndex === 0){
//     alert("please select a state.")
//     return false;
//   }


// }


// function checkForSelection(selectID){

//   var target = document.getElementById(selectID);

//   if(target.selectedIndex === 0){
//     alert("Please select a state.");
//     console.log(target.selectedIndex);
    
//     target.focus();
//     return false
//   }

//   return true


// }


// function validateRadios(){
//   var radios = document.getElementsByName("r1");

//   for(var i = 0;i < radios.length;i++){
//     if(radios[i].checked){
//       return true
//     }
//   }
//   alert("Please check one.");
//   return false;


// }

// function validateZip(){

//   var InpValue = document.getElementById("zip").value.trim();

//   if(InpValue.length < 5){
//     alert("Please enter a 5-digit code.")
//     return false;
//   }
//   return true;
// }

// function validateZip(){

//   var InpValue = document.getElementById("zip").value.trim();

//   if(InpValue.length !== 5){
//     alert("Enter 5 digits!");
//     return false;
//   }

//   for(var i=0; i < 5; i++){
//     if(isNaN(Number(InpValue[i]))){
//       alert("Only digits Allowed");
//       return false;
//     }
//   }

//   return true;  
// }


// function validateZip(){
//   var v = document.getElementById("zip").value.trim();
//   var regex = /^\d{5}$/
//   if(!regex.test(v)){
//     alert("Please enter exactly 5 digits!")
//     return false;
//   }
//   return true;
// }


// function validatePassword(password) {
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
//   return passwordRegex.test(password);
// }

// console.log(validatePassword("meer1@SS"));


// check empty string

// function validateEmail(){
//   var email = document.getElementById("email").value.trim();

//   if(email === ""){
//     alert("please fill the email!");
//     return false;
//   }

//   return true;
// }


// check poisiton of @


// function validateEmail(){
//   var email = document.getElementById("email").value.trim();

//     var at = email.indexOf("@");

//     if(at < 1 || at > email.length - 5){
//       alert("Invalid Poistion of @");
//       return false;
//     }

//     return true;


// }

 // check Dot (.) after @

// function validateEmail(){
//   var email = document.getElementById("email").value.trim();

//     var at = email.indexOf("@");
//     var dot = email.indexOf(".");

//     if(dot - at < 2 || dot > email.length - 3){
//       alert("Dot Location is Invalid!");
//       return false;
//     }
//    return true;


// }

// function validateEmail(){

// var email = document.getElementById("email").value.trim();


// var firstAt = email.indexOf("@");
// var lastAt = email.lastIndexOf("@");



// if(firstAt === -1 || firstAt !== lastAt){
//   alert("Email must contain exactly one @!");
//   return false;
// }

// return true;

// }


// function validateEmail(){
//   var email = document.getElementById("email").value.trim();


//   var regex = /^\S+@\S+\.\S{2,4}$/;

//   if(!regex.test(email)){
//     alert("Please enter a valid email");
//     return false;
//   }

//   return true;


// }


// function validateEmail(){
//   var email = document.getElementById("email").value.trim();


//   var regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//   if(!regex.test(email)){
//     alert("Please enter a valid email");
//     return false;
//   }

//   return true;


// }

// function greetWorld(){
//   var greeting = "Hello World!";
//   aler(greeting);
// }

// greetWorld()


// try{
//   // code jo run karna hai
// }
// catch(error){
//   // error aane par ye chalega
// }

// function greetWorld(){

//   try{
//     var greeting = "Hello World!";
//     aler(greeting);
//   }
//   catch(err){
//     alert("Error mila: " + err)
//   }


// }


// try{
//   console.log("Starting code...");

//   let x = 10;
//   let y = z + 5;

//   console.log("This line will not run!"); 
// }
// catch(error){
//   console.log("Error aaya: " + error);
  
// }

// try{
//   let num = 10;
//   console.log(num / 0); // no error
// }
// catch(error){
//   console.log("Error: " + error);
// }
// finally{
//   console.log("Finally Block chala!");
  
// }


// try{
//   console.log(a + 2); // a define nahi hai // error
// }
// catch(e){
//   console.log("Error Type: " + e.name);
//   console.log("Error Message: " + e.message);
  
// }


// function divideNumbers(a, b){
//   try {
//     if(isNaN(a) || isNaN(b)){
//       throw "please enter only numbers"
//     }
//     console.log(a / b);
    
//   } catch (error) {
//     console.log("Error: " + error);
    
//   }
// }

// divideNumbers(10, "abc");


try {
  var age = 121;
  if(age < 18){
    throw "Underage"
  }
  console.log("allowed!");
  
} catch (error) {
  console.log("Error: " + error);
  
}