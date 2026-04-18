console.log("JavaScript Connected!");

// var students = ["Ali" , "Hafeez" , "Ahmed" , "Minhaj" , "Mehboob"];

// console.log(students);

// console.log(students[0]);
// console.log(students[2]);

// var students = ["Ali" , "Hafeez" , "Ahmed" , "Minhaj" , "Mehboob"];


// students.push("Bilal");
// students.unshift("Babar");

// console.log(students);


// students.pop(); // remove last item.
// students.shift(); // remove first item.

// console.log(students.length);


// var arr = [1 , 2 , 3 , 4 , 5 ,6 ,7 ,8 ,9 ,10];

// var copy = arr.slice(1,8);

// console.log(copy);

// var fruits = ["Apple" , "Mango" , "Banana" , "Strawberry" , "Peach" , "watermelon"];


// fruits.splice(1, 2 , "Grapes");

// console.log(fruits);


// for (initialization;    condition;  increment/decrement){
//   block of code
// }


// for(var i = 1; i <= 5; i++){
//   console.log("Number:" , i);
// }

// var fruits = ["Mango" , "Peach" , "Apple" , "Banana" , "Orange"];

// for(var i = 0; i < fruits.length; i++){
//   console.log("Fruit:" , fruits[i]);
// }

// for(var i = 0; i <= 10; i++){
//   if(i % 2 === 1){
//     console.log("Even" , i);
//   }
// }


// for(var i = 1; i <= 3; i++){
//   console.log("Table of " + i);
//   for(var j = 1; j <= 5; j++){
//     console.log(i + " x " + j + " = " + i * j);
//   }

//   console.log("-------------")
// }


// for(var i = 10; i >= 1; i--){
//   console.log(i)
// }


// var nums = [10, 20 , 30 , 40];
// var total = 0;

// for(var i = 0; i < nums.length; i++){
//   total += nums[i]
// }

// console.log("Total:" , total);


// var num = +prompt("Type your number") // used + so that when user gives input , it gets converted to number
// var total = +prompt("How many times you wanna multiply!")

// for(var i = 1; i <= total; i++){
//   console.log(num + " x " + i + " = " + num * i);
//   document.write(num + " x " + i + " = " + num * i + "<br />");
// }

// var matrix = [
//   [1, 2 ,3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// console.log(matrix[2][0]);

// for(var i =0; i < matrix.length; i++){

//   for(var j = 0; j < matrix[i].length; j++){

//     console.log(matrix[i][j]);


//   }
// }


// for(var i =1 ; i <= 5 ; i++){
//   var stars = "";

//   for(var j = 1; j <= i; j++){

//     stars += "* ";

//   }

//   console.log(stars);

// }

// var boys = ["Bilal" , "Ali" , "Haris" , "Abdullah"];
// var girls = ["Ayesha" , "Zoya" , "Sara" , "Eshal"];


// for(var i = 0; i < boys.length; i++){

//   for(var j = 0; j < girls.length; j++){
//     console.log(boys[i] + " VS " + girls[j]);
//   }


// }


// var items = ["pen" , "book" , "eraser"];

// var found = false;

// for(var i = 0; i < items.length; i++){

//   if(items[i] === "book"){
//     console.log("Found");
//   }else{
//     console.log("Not Found!");
//   }


// }



// for(var i =0 ; i < items.length; i++){
//   if(items[i] === "book"){
//     found = true;
//     break;
//   }
// }


// if(found){
//   console.log("Book Mil gaya!");
// }else{
//   console.log("Book Nahi mila!");
// }


var items = ["Pen" , "Book" , "raser" , "BallPen"];

var flag = false;


for(var i = 0; i < items.length; i++){

  if(items[i] === "Eraser"){
    flag = true;
    break;
  }
}

if(flag){
  console.log("Eraser mil gaya hai!");
}else{
  console.log("Eraser Nahi mila!");
}

