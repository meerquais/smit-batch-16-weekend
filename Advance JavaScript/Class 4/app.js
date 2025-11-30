console.log("JavaScript Connected!");

// const nums = [1,2,3,4];

// const doubled = nums.map(function(n){ return n * 2});

// console.log(doubled);
// console.log(nums);

// const users = [{name:"Ali" , age:20},
//   {name:"Meer",age:26}];

// const names = users.map(function(u){return u.name});

// console.log(names);

// const arr = ["a" , "b" , "c"];

// const labeled = arr.map(function(v,i){
//   return i + ":" + v;
// });

// console.log(labeled);

// const scores = [40,55,70,90];

// const grade = scores.map(function(s){
//   return s >= 60 ? 'pass' : 'fail';
// });

// console.log(grade);


// const nums = [1,2,3];

// const result = nums.map(function(n){return n +1;}).map(function(n){
//   return n * 3
// })
// console.log(result);

// const items = ["Apple" , "Mango" , "Orange" , "Banana"];

// const lis = items.map(function(it){
//   return '<li>' + it + '</li>'
// });

// console.log(lis.join(''));


// const nums = [1,4,7,10];

// const big = nums.filter(function(n){
//   return n > 5;
// });

// console.log(big);

// const users = [
//   {name:"Meer", active:true},
//   {name:"Ali" , active:false}
// ];

// const active = users.filter(function(u){
//   return u.active;
// });

// console.log(active);


// const arr = [1,2,3,4,5];

// const sum = arr.reduce(function(acc,val){
//   return acc + val;
// },0);

// console.log(sum);

// const nums = [2,3,4];

// const prod = nums.reduce(function(acc , n){
//   return acc * n;
// },1);

// console.log(prod);

// const nested = [[1,2],[3,4],[5]];

// const flat = nested.reduce(function(acc,arr){
//   return acc.concat(arr);
// },[]);

// console.log(flat);

// [1,2,3].forEach(function(n){
//   console.log(n);
  
// })

// const res = [];

// [1,2,3].forEach(function(n){
//   res.push(n * 2);
// });

// console.log(res);

// const arr = ["a" , "b"];

// arr.forEach(function(v,i){
//   console.log(i , v);
  
// })

// const items = ["x" , "y"];

// let html = ''; 

// items.forEach(function(i){
//   html += '<div>' + i + '</div>';
// });

// console.log(html);


// const arr = [1,3,5,7,9];

// const firstEven = arr.find(function(n){
//   return n % 2 === 0;
// });

// console.log(firstEven);

// const users = [
//   {id:1},
//   {id:2},
//   {id:3}
// ];

// const u = users.find(function(x){
//   return x.id === 2;
// });

// console.log(u);


// console.log([1,3,5].some(function(n){
//   return n % 2 === 0
// }));

// console.log([1,4,5].some(function(n){
//   return n % 2 === 0
// }));

// const users = [
//   {active:false},
//   {active:true}
// ];

// console.log(users.some(function(u){
//   return u.active;
// }));


// const arr = [10,20,30];

// const [a , b ,c ]= arr;

// console.log(a , b , c );


// const arr = [1,2,3,4];

// const [x , , z] = arr;

// console.log(x, z);


// const arr = [5, 10];

// const [a = 1 , b = 2 , c = 3] = arr;


// console.log(a, b , c);

// let p = 1;
// let q = 2;


// [p , q] = [q , p];

// console.log(p , q);

// const arr = [1,2,3,4,5];

// const [first , second , ...rest] = arr;

// console.log(first , second , rest);


// const nested = [1, [2,3], 4];

// const [one , [two,three] , four] = nested;

// console.log(one, two , three, four);



// const user = {
//   name:"Ali",
//   age:25
// };

// const {name , age } = user;

// console.log(name, age);

// const u = {
//   name:"Ali"
// }

// const {name , city = "Karachi"} = u;

// console.log(name , city);

// rest operator arrays ya objects mein bachi hui vales ko ek single variable mein collect karta hai. function parameters ein wo bacha hua arguments ek array bana deta hai.

// function sum(...nums){
//   return nums.reduce(function(acc,n){
//     return acc + n;
//   },0);
// }

// console.log(sum(1,2,3,4));


// function greet(greeting , ...names){
//   return greeting + ' ' + names.join(', ');
// };

// console.log(greet('Hello', "ali" , "meer" , "hafeez"));


// const joiner = (...parts)=> parts.join('-');

// console.log(joiner("a" ,"b", "c"));

// function getTop(first, ...rest){
//   if(rest.length > 3)return "too many"
//   return rest;
// }

// console.log(getTop(0,1,2));

// const user = {
//   name:"A",
//   age:20,
//   role:"dev"
// };

// const {name, ...others} = user;

// console.log(name, others);


// const obj = {a:1 , b:2 , c:{x:9}};

// const {a, ...rest} = obj;

// console.log(a , rest);

// spread operator array ya object ko spread karke elements/properties alag alag items bana deta hai. Ye values ko copy ya merge karne k liye use hota hai.

// const a = [1,2,3];
// const b = [...a]; 

// console.log(b);
// console.log(a === b);

// const a = [1,2];
// const b = [3,4];

// const all = [...a , ...b];

// console.log(all);

// const base = [2,3];
// const newArr = [1, ...base , 4];

// console.log(newArr);

// console.log(base);



// function sum(a,b,c){
//   return a + b + c;
// }

// const nums = [1,2,3];

// console.log(sum(...nums));

// const chars = [...'hello'];
// console.log(chars);


// const arr = [{x:1}];

// const copy = [...arr];

// copy[0].x = 9 ; 

// console.log(arr[0].x);

// spread creates shallow copies, nested objects remain same reference.

// order matters for objects, later spreads overwrite previous properties

// console.log("start");

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


// let x = 10;
// console.log(x);


console.log("start");

setTimeout(function(){
  console.log("Timeout");  
}, 0);

console.log("end");

