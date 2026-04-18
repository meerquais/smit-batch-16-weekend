console.log("JavaScript Connected!");

// console.log("Start");

// function sayHi(){
//   console.log("Hi");  
// }

// sayHi();
// console.log("End");

// test();

// function test(){
//   console.log("Running");  
// }

// console.log(a);

// var a = 5;
// console.log(a);

// console.log(x);

// let x = 10;


// 1. Function ko variable mein store karna

// var greet = function(){
//   console.log("hello");  
// };

// greet();

// 2.function ko array mein rakhna

// var arr = [
//   function(){console.log("A")},
//   function(){
//     console.log("B");    
//   }
// ]

// arr[0]();
// arr[1]();

// console.log(arr[1]);

//3. Function object property ke tor pr

// var obj = {
//   sayHi:function(){
//     console.log("Hi");
    
//   }
// }

// obj.sayHi();

//4. Function ko argument pass karna (Callback)

// function execute(fn){
//   fn();
// }
// execute(function(){
//   console.log("Run");
  
// })

// 5. Function ko return karna


// function outer(){
//   return function(){
//     console.log("Inner");    
//   };
// }

// var x = outer();

// x();

// Function ko another variable mein copy karna.

// function hello(){
//   console.log("Hello");  
// };

// var copy = hello;

// copy();

//7. Dynamic Assignment 

// var func;

// if(true){
//   func = function(){
//     console.log("Yes");
//   }
// }

// func()

// Higher-Order Function ( HOF )


// function argument accept karna

// function doSomething(callback){
//   callback();
// }

// doSomething(function(){
//   console.log("Callback Run");
  
// })

// function return karta hai.

// function outer(){
//   return function(){
//     console.log("Returned Function run");
    
//   }
// }

// var fn = outer();

// fn();

// function master(cb){
//   return function(){
//     cb();
//   }
// }

// var run = master(function(){
//   console.log("Work");
// });

// run()

// function repeat(times , fn){
//   for(var i=0;i < times; i++){
//     fn()
//   }
// }

// repeat(3,function(){
//   console.log("Hi");
  
// })

// function customFilter(arr,test){

//   var res = [];
//   for(var i =0;i < arr.length;i++){
//     if(test(arr[i])){
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(customFilter([1,2,3,4],function(n){
//   return n > 1
// }));

// function customMap(arr, process){
//   var output = [];
//   for(var i =0; i < arr.length;i++){
//     output.push(process(arr[i]));
//   }
//   return output;
// }

// console.log(customMap([1,2,3,4,5,6,7,8,9], function(x){
//   return x * 10
// }));


// callback function

// let arr = [1,2,3];

// arr.forEach(function(item,index){
//   console.log(index, item);
  
// })


// function repeat(times,callback){
//   for(var i=0;i < times;i++){
//     callback(i)
//   }
// }

// repeat(10,function(i){
//     console.log("run" , i);
    
// })

// function callAndReturn(cb){
//   cb();
//   return "outerReturn";
// }

// let result = callAndReturn(function(){
//   return 'innerReturn';
// })

// console.log(result);

// call arguments ko alag alag receive karta hai.

// apply arguments ko array ki form mein receive karta hai.

// bind ek naya function return karta hai jismein "this" permanently
// bind hota hai, aur optionally kuch initial arguments pre-set ho sakte hai.

// CALL


// function say(){
//   console.log(this.name)
// }

// const obj = {
//   name:"Meer"
// };

// say.call(obj)

// function greet(greeting , punctuation){
//   console.log(greeting +", " + this.name + punctuation);
// }

// const user = {
//   name: "Hafeez"
// }

// greet.call(user, "hello" , "!");


// const obj = {
//   value:10,
//   getValue: function(){
//     return this.value
//   }
// };
// const obj1 = {
//   value:42
// }

// console.log(obj.getValue.call(obj1));


// function sum(a , b, c){
//   return a + b + c;
// }

// const arr = [1,3,6];

// console.log(sum.apply(null , arr));


// const numbers = [5,6,2,9];

// console.log(Math.max.apply(null, numbers));

// function sayHello(){
//   console.log("hello, " + this.name);  
// }

// const person = {
//   name: "Meer"
// }
// const bound = sayHello.bind(person);

// bound()

// sayHello()

// function add(a,b){
//   return a  + b ;
// }

// const addFive = add.bind(null, 5 , 40)

// console.log(addFive());

