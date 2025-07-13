console.log("JavaScript Conntected!");


// if(condition){
//   block of code 
// }else{
//   block of code
// }


// var marks = 70;

// if(marks > 80){
//   console.log("Excellent Results!");
// }


// var age = 15;

// if(age >= 18){
//   console.log("Aap vote de sakhte hai.");
// }else{
//   console.log("Aap vote nahi de sakhte.");
// }


// var temp = 5;

// if(temp < 10){
//   console.log("Bohot thand hai.");
// }else if(temp < 25){
//   console.log("mausam normal hai");
// }else{
//   console.log("Bohot garmi hai.");
// }


// var marks = 75;

// if(marks >= 80){
//   console.log("Grade A");
// }else if(marks >= 60){
//   console.log("Grade B");
// }else if(marks >= 40){
//   console.log("Grade C");
// }else{
//   console.log("Failed.");
// }

// var signal = prompt("Type the shown signal!");

// if(signal === "red"){
//   console.log("Ruko (STOP)");
// }else if(signal === "yellow"){
//   console.log("Taiyaar ho jao (get ready)");
// }else if(signal === "green"){
//   console.log("Chalo (GO)");
// }else{
//   console.log("invalid signal");
// }


// var age = 20;
// var hasID = true;

// if(age >= 18 && hasID){
//   console.log("aap vote de sahte ho.");
// }else{
//   console.log("Aap vote nahi de sakhte");
// }


// var age = 55;

// if(age <= 12 || age >= 60){
//   console.log("Apko discount milega");
// }else{
//   console.log("Apko discount nahi milega");
// }

// var isStudent = true;
// var age = 26;

// if(isStudent){
//   if(age < 18){
//     console.log("Minor Student");
//   }else{
//     console.log("Adult Student!");
//   }
// }else{
//   console.log("Student nahi hai");
// }


// var age = 15;
// var hasTicket = true;

// if(age >= 18){
//   if(hasTicket){
//     console.log("Enjoy your movie!");
//   }else{
//     console.log("Pehle ticket lo");
//   }
// }else{
//   console.log("18 se chhote allowed nahi hai.");
// }


var isStudent = true;
var attendance = 80;
var feePaid = false;

if(isStudent){
  if((attendance >= 75 && feePaid) || attendance === 80){
    console.log("Eligible for class!");
  }else{
    console.log("Not Eligible for class!")
  }
}else{
  console.log("Sirf students allowed hai.");
}