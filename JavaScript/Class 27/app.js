console.log("JavaScript Connected!");

// while loop
// while(condition){
//   // block of code
// }

// var i = 1;
// while(i <=5){
//   console.log(i);
//   i++  
// }

// var n = 5;
// var sum = 0;
// var i = 1;

// while(i <= n){
//   sum += i;
//   i++
// }

// console.log(sum);

// var arr = ["apple" , "Mango" , "banana"];

// var idx = 0;

// while(idx < arr.length){
//   console.log(idx, arr[idx]);
//   idx++  
// }

// var arr = [3,7,2,9];
// var target = 10;

// var idx = 0;
// var found = -1;

// while(idx < arr.length){
//   if(arr[idx] === target){
//     found = idx;
//     break;
//   }
//   idx++
// }
// console.log(found);


// var i = 1;
// while(i <=3){

//   var j = 1;
//   while(j <= 3){
//     console.log(i + ' x ' + j + ' = ' + (i * j));
//     j++
//   }
//   i++
// }

// var count = 0;

// while(true){
//   count++
//   // if(count ===5)break;
// console.log(count);

// }

// console.log(count);

// syntax of do while loop 
// do{

// }while ();


// var i = 1;

// do {
//   console.log(i);
//   i++
// }while(i < 1);


// var input;
// var attempts = 0;

// do{
//   input = attempts === 0 ? 'wrong' : 'ok';
//   attempts++
// }while(input !== 'ok' && attempts <3);
// console.log(input, attempts);


// var choice;

// do{
//   choice = Math.floor(Math.random() * 4)
//   console.log("choice" , choice);
// }while(choice !== 3);

// var dataReady = false;
// var tries = 0;


// while(!dataReady && tries < 5){
//   console.log("Checking server...");
//   tries++

//   if(tries === 3) dataReady = true;


// }
// console.log("Data loaded:" , dataReady);

// var playerAlive = true;
// var health = 100;

// while(playerAlive){
//   health -= 20;
//   console.log("Player Health:" , health);

//   if(health <= 0){
//     playerAlive = false;
//     console.log("Game Over");

//   }

// }

// var time = 10;
// while(time > 0){
//   console.log("Time left:" , time);
//   time--  
// }

// console.log("Time up!");

// var arr = ["task1" , "Task 2" , "task 3"];



/*  while(arr.length >0){
  var current = arr.shift();
  console.log("Processing:" , current);
}
console.log("All Tasks done"); */

// var message = "Hello this is an event!";

// function popup(){
//   alert(message)
// }

// function getValue(){
//   var input = document.getElementById("gettingFieldValue")
//   console.log(input.value);
//   input.value = ""
// }


// function fillCity() {
//   var cityName;
//   var zipEntered = document.getElementById("zip").value;
//   switch (zipEntered) {
//     case "60608":
//       cityName = "Chicago";
//       break;
//     case "68114":
//       cityName = "Omaha";
//       break;
//     case "53212":
//       cityName = "Milwaukee";
//       break;
//     default:
//       cityName = "Not matched!"
//   }
//   document.getElementById("city").value = cityName;
// }


// function changeImg(){
//   var image = document.getElementById("image");
//   image.src = "https://i.ytimg.com/vi/zEr-mm8OSGo/sddefault.jpg"
// }


// function fontSize(){
//   var para = document.getElementById("para");
//   para.className += " fontSize"
// }

console.log(document.children[0].children[1].children[0]);
console.log(document.childNodes[0].childNodes[1].childNodes[0]);
