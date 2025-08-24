console.log("JavaScript Connected!");


// var now = new Date();

// console.log(now);

// var future = new Date("July 2,2040");

// console.log(future);



// var now = new Date();
// console.log(now);

// var doomsday = new Date("June 30, 2035");
// console.log(doomsday);

// var msDifference  = doomsday.getTime() - now.getTime();

// console.log(msDifference);

// var dDifference = msDifference / (1000 * 60 * 60 * 24);
// dDifference = Math.floor(dDifference)
// console.log(dDifference + " Days left");

// var dDifference =Math.floor( msDifference / (1000 * 60 * 60 * 24 * 30));
// console.log(dDifference);

// var dDifference =Math.floor( msDifference / (1000 * 60 * 60 * 24 * 30 * 12));

// console.log(dDifference);



// function foo(){
//   console.log("Hello World!");
// }


// foo();
// foo();
// foo();

// var now = new Date();
// var theHr = now.getHours();
// var theMins = now.getMinutes();
// alert("Time: " + theHr + ":" + theMins);


// function telltime(){

//   var now = new Date();
//   var theHr = now.getHours();
//   var theMins = now.getMinutes();
//   console.log("Time: " + theHr + ":" + theMins)

//   alert("Time: " + theHr + ":" + theMins)
  
// }



// var username = prompt("Type your Name");




// function greet(name){
//   console.log("Hello, " + name);
// }

// // greet(username)

// greet("Meer");


// function add(b ,a){

//     console.log(a);
//     console.log(b);
    
    

//     console.log(a + b);
// }

// add(200,250);




// function welcome(name = "Guest"){
//   console.log("Welcome, " + name);
// }

// welcome();
// welcome("Meer Quais");




// function foo(){
//   var name = "Ali Ahmed";

//   console.log(name);
// }

// console.log(name);


// foo();


// var name = "Meer";

// function foo(){
//   console.log(name);
// }

// foo();

// global scope 

// var name = "Ali"; // global scope 

// function greet(){
//   console.log("Hello, " + name);
// }

// greet();
// console.log(name);

// local scope 


// function greet(){
//   var stdName = "Ayan";
//   console.log("Hello, " + stdName);
// }

// greet();
// console.log(stdName);

// var country = "Pakistan";

// function showCity(){
//   var city = "Karachi"; // local scope

//   console.log(city + ", " + country);
// }

// showCity();
// console.log(country);
// console.log(city);


// function add(a,b){
//   return a + b;
// }

// var result = add(20,6);

// console.log(result);

// function greetUser(name){
//   return "Hello " + name
// }


// var message = greetUser("Meer Quais");

// console.log(message);


// function isAdult(age){
//   return age >= 18;
// }

// console.log(isAdult(20));
// console.log(isAdult(16));


// function calculateBill(price , quantity){
//   return price * quantity
// }

// var bill = calculateBill(200 , 3);

// console.log(bill);


var display = document.getElementById("disply");


function append(value){

  display.value += value

}

function clearDisplay(){
  display.value = ""
}

function delChar(){
  display.value = display.value.slice(0,-1);
}


function calculate(){
  display.value = eval(display.value)
}



















