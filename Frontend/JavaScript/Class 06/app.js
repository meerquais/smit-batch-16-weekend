console.log("JavaScript Connected!");

// var fruit1 = "Apple";
// var fruit2 = "Banana";
// var fruit3 = "Orange";
// var fruit4 = "Mango";
// var fruit5 = "Peach";

// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);
// console.log(fruit4);
// console.log(fruit5);


// var fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Peach" ];

// fruits[5] = "Grapes";
// fruits[10] = "Pineapple"

// console.log(fruits);
// console.log(fruits[1]);


// var a = [1 , 2 ,3];
// var b = a;

// var arr = [1 , 2 , 3 , 4 , 5 , 6, 7, 8, 9, 10];

// console.log(arr.length)

// arr.push(11)
// console.log(arr)


// var arr = ["This is Array" , 1 , true , undefined , null , []];

// console.log(arr);


// var fruits = [ "apple" , "Banana"];

// fruits.push("Mango");

// fruits.pop()

// fruits.unshift("Peaches" , "Banana");

// fruits.shift();


// console.log(fruits);



// var fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes" , "Peaches"];

// var sliced = fruits.slice(1,4);

// console.log("This is Sliced" ,sliced);
// console.log("This is Original Array" ,fruits);

// var nums = [1 , 2 ,3 , 4 , 5];
// var copy = nums.slice();

// console.log(copy);

// removing elements 

// var items = ["a" , "b" , "c" , "d" , "e"];

// items.splice(1,2);

// console.log(items);


// inserting elements 

// var colors = ["Red", "Green" , "Blue"];
// // colors.pop()
// colors.splice(2,1);
// console.log(colors);
// colors.splice(1, 0, "Yellow" , "Purple");
// console.log(colors);

// var names = ["Ali" , "Ahmed" , "Zoya"];

// names.splice(1,1,"Sara");
// console.log(names);



// var arr = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];

// arr.splice(1,8);

// console.log(arr);


// var arr = [1,2,3,4,5];

// arr.length;

// var name = "Meer Quais";

// console.log(name.length);


// var msg = "Welcome to JavaScript";

// console.log(msg.slice(11));

// console.log(msg.slice(0,7));

// console.log(msg.slice(-10));

// var msg = "JavaScript";

// console.log(msg.substring(0,4));
// console.log(msg.substring(4,0));

// var user = "ali";

// var shout = "HELLO!"

// console.log(user.toUpperCase());
// console.log(shout.toLowerCase());


// var user = prompt("Type your name!")

// console.log(user.toUpperCase());


// var a = [1 , 2 ,3];
// var b = a;
// b.push(4)



// console.log("a:" , a);
// console.log("b:" , b);


// var arr = [];

// if([] == []){
//   console.log("True");
// }else{
//   console.log(false);
// }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for(init ; condition ; incre/decre){
//   // block of code 
// }

// for(var i = 1; i <= 100 ; i++){
//   console.log(i);
// }

var fruits = ["Apple" , "Banana" , "Mango"];

for(var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}