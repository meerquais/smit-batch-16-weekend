console.log("JavaScript Connected!");

// var input = "Hello";

// var reversed = "";


// for(var i = input.length -1; i >= 0; i--){
//   reversed += input[i];
// }

// console.log(reversed);

// var str = "I love JavaScript";
// var vowels = "aeiouAEIOU";
// var count = 0;


// for(var i = 0; i < str.length; i++){

//   if(vowels.includes(str[i])){
//     count++
//   }
// };

// console.log("Total Vowels: " + count);


// var str = "I love JavaScript";
// var vowels = "aeiouAEIOU";
// var count = 0;

// for(var i = 0; i < str.length; i++){

//   if(vowels.includes(str[i])){
//     count++;
//   }
// };

// console.log("Total Vowels: " + count);

// var word = "rotator";
// var isPalindrome= true;
// for(var i =0; i < word.length / 2; i++){

//   if(word[i] !== word[word.length -1 - i]){
//     isPalindrome = false;
//     break;
//   }
// };

// if(isPalindrome){
//   console.log("Palindrome hai");
// }else{
//   console.log("Palindrome nahi hai.");
// }


// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.LN2);


// console.log(Math.round(4.5)); // Nearest integer 

// console.log(Math.ceil(4.1));

// console.log(Math.floor(4.9));

// console.log(Math.pow(8,4));

// console.log(Math.sqrt(46));


// console.log(Math.random());

// console.log(Math.floor(Math.random() * 10000) +1);


// console.log(Math.max(3,4,9,1));
// console.log(Math.min(3,4,9,1));
// console.log(Math.abs(-100));

// var raidus = 7;
// var area = Math.PI * Math.pow(raidus,2);

// console.log("Circle ka area: " + area);


// alert("Welcome to the Number Guessing Game!");

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userGuess = +prompt("Guess a number between 1 and 10");

// if(userGuess === secretNumber){
//   alert("Congrats! You Guessed it right!")
// }else if(userGuess > secretNumber){
//   alert("Too High! The correct Number was "  + secretNumber);
// }else if(userGuess < secretNumber){
//   alert("Too low! The Correct Number was " + secretNumber);
// }else{
//   alert("Pease end a valid number")
// }


// var num = 5 / 3 ;

// var fixed = num.toFixed(2);


// fixed = Number(fixed)

// console.log(num);
// console.log(num.toFixed(2));
// console.log(num.toFixed(4));
// console.log(fixed);

// var num = 5 / 3;

// var precision = num.toPrecision(3);
// precision = Number(precision);

// console.log(num.toPrecision(3));
// console.log(precision);

// REVISION



var std = "Bilal";

// legal names


// var name = "Ali";
// var _count = 5;
// var $price = 10;
// var user123 = "Ahmed";
// var studentName = "Minhaj";
// var student_name = "Faraz";
// var StudentName = "Mehboob";

// illegal names


// var 1name = "Bad" // starts with digit 
// var for = 5; // "for" reserved.
// var user-name = "x" "-" not allowed // minus 

// var string = "This is String";
// var number = 10000;
// var boolean = true;
// var word = undefined; // var word;
// var word2 = null;

// var num1 = 5;
// var num2 = 10;


// console.log(num1 + num2); // add
// console.log(num1 - num2); // minus
// console.log(num1 * num2); // multiply
// console.log(num1 / num2); // division
// console.log(num1 % num2); // modulas

// console.log(2 + 3 * 4); // 14
// console.log((2 + 3 )* 4); // 20

// var a = 5;

// a++;

// console.log(a)

// var a = 5;

// 5 - 5 + 6 + 7 + 7 - 6 + 6 + 4 + 4 - 4 + 3

// a++ - a-- + ++a + ++a + a - --a + a-- + --a + a - a + a-- ;

// console.log(a)

// console.log(1 + 2 + "3"); // 

// console.log(Number("1") + Number("2") + Number("3"));

// var firstName = "Ali";
// var lastName = "Ahmed";

// console.log(firstName + " " + lastName);

// var userInput = prompt("Type your name");
// var userInput2 = +prompt("Type your age");

// console.log(userInput);
// console.log(userInput2);


// var age = 17;

// if(age >= 18){
//   console.log("You can vote!");
// }else{
//   console.log("You cannot Vote!");
// }

// console.log(5 == "5");
// console.log(5 === "5");


// var marks = 75;

// if(marks >= 80){
//   console.log("A+");
// }else if(marks >=70){
//   console.log("A");
// }else if(marks >=60){
//   console.log("B");
// }else{
//   console.log("Try Harder");
// }

// var t = 20;

// if(t < 10){
//   console.log("cold");
// }else if(t < 25){
//   console.log("Nice");
// }else{
//   console.log("Hot");
// }

// var age = 17;
// var hasID = true;

// if(age >= 18 && hasID){
//   console.log("Enter");
// }


// var isStudent = true;
// var isMember = false;

// if(isStudent || isMember){
//   console.log("Discount");
// }

// var isStudent = true;
// var age = 16;

// if(isStudent){
//   if(age < 18){
//     console.log("Minor Student");
//   }else{
//     console.log("Adult Student");
//   }
// }


// var loggedIn = true;
// var role = "Guest";

// if(loggedIn){
//   if(role === "admin"){
//     console.log("Show Admin Panel");
//   }else{
//     console.log("Show Member Panel");
//   }
// }


var arr = ["a" , "b" , "c" , "d"];
// console.log(arr);
// console.log(arr[0]);

// arr[1] = "B";

// console.log(arr);


var copied = arr.slice(1,3);

console.log(copied);
