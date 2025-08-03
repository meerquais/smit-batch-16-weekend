// console.log("JavaScript Connected!");


// var num1 = +prompt("Type Number 1");
// var num2 = +prompt("Type Number 2");
// var opt = prompt("Type your Operator!");

// if(opt === "+"){
//   document.write(num1 + num2)
// }else if(opt === "-"){
//   document.write(num1 - num2)
// }else if(opt === "/"){
//   document.write(num1 / num2)
// }else if(opt === "*"){
//   document.write(num1 * num2)
// }else{
//   alert("Invalid!")
// }

// var str = "this is all lowercase text";
// var str1 = "THIS IS ALL UPPERCASE TEXT";

// console.log(str.toUpperCase());
// console.log(str1.toLowerCase());


// for(var i = 0; i < input.length; i++){


//   var char = input[i];
//   var found = false;


//   for(var j = 0; j < lowercase.length; j++){

//     if(char === lowercase[j]){

//       result += uppercase[j];
//       found = true;
//       break;
//     }
//   }

//   if(!found){
//     result += char;
//   }
// }

// console.log(result);


// for(var i = 0; i < input.length; i++){

//   var char = input[i];
//   var found = false;


//   for(var j = 0; j < uppercase.length; j++){

//     if(char === uppercase[j]){

//       result += lowercase[j];
//       found= true;
//       break;
//     }
//   }

//   if(!found){
//     result += char;
//   }
// }

// console.log(result);



// first letter

// for(var j = 0; j < lowercase.length; j++){

//   if(input[0] === lowercase[j]){

//     result += uppercase[j];
//     break;
//   }
// }

// if(result === ""){
//   result += input[0];
// }


// for(var i = 1 ; i < input.length; i++){

//   var char = input[i];
//   var found = false;

//   for(var j = 0; j < uppercase.length; j++){
    
//     if(char === uppercase[j]){

//       result += lowercase[j];
//       found = true;
//       break;
//     }
//   }


//   if(!found){
//     result += char;
//   }
// }

// console.log(result);






// for(var i = 0; i < input.length; i++){

//   var char = input[i];

//   if(isStart){
//     let found = false;

//     for(var j = 0; j < lowercase.length; j++){

//       if(char === lowercase[j]){

//         result += uppercase[j];
//         found = true;
//         break;
//       }
//     }

//     if(!found){
//       result += char;
//     }
//     isStart = false;
//     }else{

//       var found = false;

//       for(var j = 0; j < uppercase.length; j++){

//         if(char === uppercase[j]){
//           result += lowercase[j];
//           found = true;
//           break;
//         }
//       }
//       if(!found){
//         result += char;
//       }
//     }


//     if(char === " "){
//       isStart = true;
//     }
// }


// console.log(result)

// var input = prompt("Type something.");
// var lowercase = "abcdefghijklmnopqrstuvwxyz";
// var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var result = "";
// var isStart = true; // Capitalize first letter after space.
// for(var i = 0; i < input.length; i++){

//   var char = input[i];

//   if(isStart){

//     var found = false;

//     for(var j = 0; j < lowercase.length; j++){

//       if(char === lowercase[j]){

//         result += uppercase[j];
//         found = true;
//         break;
//       }
//     }
//     if(!found){
//       result += char;
//     }
//     isStart = false;
//   }else{
//     var found = false;

//     for(var j = 0; j < uppercase.length; j++){


//       if(char === uppercase[j]){
//         result += lowercase[j];
//         found = true;
//         break;
//       }
//     }
//     if(!found){
//       result += char;
//     }
//   }

//   if(char === " "){
//     isStart = true;

//   }
// }
// console.log(result);




// var num = 4.1; 

// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num))


// var num = 7.7;

// console.log(Math.round(num));
// // 8

// console.log(Math.floor(3.99));
// // 3

// console.log(Math.ceil(2.01));
// // 3


// var price = 999.49;

// console.log(Math.round(price));

// // 999


// console.log(Math.random());

// console.log(Math.floor(Math.random() * 6) + 1);

// console.log(Math.floor(Math.random() * 15 ) + 1);


// var age = "25";

// console.log(typeof +age);


// var price = "45.67";

// console.log(parseFloat(price));

// var str1 = "100px";

// console.log(parseInt(str1));
// // 100

// var str2 = "56.78kg";

// console.log(parseFloat(str2));

// // 56.78


// var numStr = "500"; // 550

// console.log(parseInt(numStr) + 50);

// random number guessing game .

// step 1 = Alert // welcome 

// step 2 = secret number

// step 3 = user guessed number = promt 

// step 4 = conditions = true = win , false = better luck next time. invalid.