console.log("JavaScript Connected!");


// function foo(){
//   console.log("This is a function!");
// }

// foo();


// function greetUser(greeting){

//   console.log(greeting);
// }

// greetUser("Hello, There!");



// var greet = "Hello, There How you doing!";

// function greetUser(greeting){
//   console.log(greeting);
// }

// greetUser(greet);


// function showBigNum(num){
//   console.log("Number is: " , num);
// }

// var almostAMil = 999999;
// showBigNum(almostAMil);
// showBigNum(999999);


// var userName = prompt("Type your name");

// function greetUser(name){
//   console.log("Hello, " + name);
// }

// greetUser(userName);




// function greetUser(name = "Guest"){
//   console.log("Hello, " + name);
// }

// greetUser("Ali");


// function showMessage(m, text , num){
//   console.log(m + text + num);
// }

// var month = "August";
// showMessage(month, "'s winner number is " , 55);


// function say(a,b){

//   if(typeof b === "undefined"){
//     b=0;
//   }


//   console.log("a:",a , "b:" ,b);
  
// }

// say(5);
// say(5,10);


// function printList(list){

//   for(var i =0;i < list.length; i++){
//     console.log((i + 1), ". " + list[i]);
//   }
// }

// var fruits = ["Apple" , "Mango" , "Banana"];

// printList(fruits)


// var students = ["Ali" , "Ahmed" , "Bilal" , "Hamza"];

// function greetOne(name){

//   console.log("Hello " , name);
// }

// greetOne(students[0])



// function add(a , b){

//   return a + b;
// }


// var result = add(5,10);

// console.log(result);


// function calcTot(merchTot){
//   var orderTot;
//   if(merchTot >= 100){
//     orderTot = merchTot;
//   }else if(merchTot <= 50){
//     orderTot = merchTot + 5
//   }else{
//     orderTot = merchTot + 5 + (0.03 * (merchTot - 50));
//   }

//   return Number(orderTot.toFixed(2));
// }


// var total = calcTot(15);

// console.log(total);


// function calcTot(merchTot){

//   var orderTot;

//   if(merchTot >= 100){
//     orderTot = merchTot;
//   }else if(merchTot <= 50){
//     orderTot = merchTot + 5;
//   }else{
//     orderTot = merchTot + 5 + (0.03 * (merchTot - 50));
//   }
//   return Number(orderTot.toFixed(2));
// }

// var total = calcTot(79.99);

// console.log(total);

// function sum(a , b){
//   return a + b
// }

// var add = sum(5 , 11);

// console.log(add);


// function square(a){

//   return a*a
// }

// var result = square(5);

// console.log(result);


// function checkOrder(num = 0){

//     if(num % 2 === 0){
//       console.log("This is Even");
//     }else{
//       console.log("This is Odd");
//     }
// }


// checkOrder(9)


// function  AreaOfRectangle(width , length){

//   return width * length

// }

// var result = AreaOfRectangle(20 , 5);

// console.log(result);

// function greetUser(name){

//   return "Hello, " + name

// }


// var greet = greetUser("Meer Quais");

// console.log(greet);


// switch(expression){
//   case "sun" :
//     alert();
//   default : 
// }

// synax 

// switch(value){
//   case A:
//     // code
//     break;
//   case B:
//     // code
//     break;
//   default:
//     //code
// }

// var dayOfWeek = "fri";

// switch(dayOfWeek){
//   case "Sun":
//     alert("Holiday");
//     break;
//   case "Sat":
//     alert("Classes");
//     break;
//   case "Fri":
//     alert("Half Time!");
//     break;
//   default:
//     alert("Shoot me now!");
// }


// var num1 = +prompt("Type Number 1");
// var num2 = +prompt("Type Number 2");
// var opt = prompt("Type your operator");

// var result;

// switch(opt){
//   case "+":
//     result = num1 + num2
//     break;
//   case "-":
//     result = num1 - num2
//     break;
//   case "/":
//     result = num1 / num2
//     break;
//   case "*":
//     result = num1 * num2
//     break;
//   default:
//     alert("Wrong Operator");
// }

// console.log(result);

// var m = +prompt("Type Month Number");

// var monthName;

// switch(m){
//   case 1:
//     monthName = "Jan";
//     break;
//   case 2:
//     monthName = "Feb";
//     break;
//   case 3:
//     monthName = "Mar";
//     break;
//   case 4:
//     monthName = "Apr";
//     break;
//   default:
//     monthName = "Invalid!"

// }

// console.log(monthName);


// var grade = "a";

// var msg;

// switch(grade){
//   case "A":
//     msg = "Excellent"
//     break;
//   case "B":
//     msg = "Good";
//     break;
//   case "C":
//     msg = "Average";
//     break;
//   case "D":
//     msg = "Below Average";
//     break;
//   case "F":
//     msg = "Failed"
//     break;
//   default:
//     msg = "Unknown Grade";
// }

// console.log(msg);


// var color = prompt("Type Signal Color.. ex: Red , Yellow , Green").toLowerCase();

// var action;


// switch(color){
//   case "red":
//     action = "Stop";
//     break;
//   case "yellow":
//     action = "Get Ready";
//     break;
//   case "green":
//     action = "Go";
//     break;
//   default:
//     action = "Signal Error";
// }

// console.log(action);


// var dayOfWeek = "Sun";

// switch(dayOfWeek){
//   case "Sat":
//     alert("Saturday");
//   case "Sun":
//     alert("Sunday");
//   case "Fri":
//     alert("Friday!");
//   default:
//     alert("False");

// }


// var dayOfWeek = "Sun";

// switch(dayOfWeek){
//   case "Sat":
//     alert("Saturday");
//     break;
//   case "Sun":
//     alert("Sunday");
//     break;
//   case "Fri":
//     alert("Friday!");
//     break;
//   default:
//     alert("False");
// }

// var grade = "E";

// switch(grade){
//   case "A":
//     console.log("Excellent");
//     break;
//   case "B":
//     console.log("Good");
//     break;
//   case "C":
//     console.log("Average");
//     break; 
// }


