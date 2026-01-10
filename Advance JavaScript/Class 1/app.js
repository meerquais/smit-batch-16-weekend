console.log("JavaScript Connected!");


// var user = {
//   name: "Ali",
//   age: 25
// }

// console.log(Object.keys(user));


// var user = {
//   name: "Ali",
//   age: 25
// }

// console.log(Object.values(user));
// console.log(Object.entries(user));

// var a = {x:1};
// var b = {y:2};

// var target = Object.assign({}, a , b);

// console.log(target);


// var proto = {greet(){return "hi";}};

// var obj = Object.create(proto,{name:{value:"sara",enumerable:true}});

// console.log(obj.greet());


// var proto = {greet(){return "hi";}};

// var obj = Object.create(proto, {name:{value:"sara", enumerable:true}});

// console.log(obj.greet());
// console.log(obj.name);

// var obj = {};


// Object.defineProperty(obj,"id",{value:42,writable:false, enumerable:true});


// console.log(obj.id);
// obj.id = 100;
// console.log(obj.id);


// var obj = {};


// Object.defineProperties(obj,{
//   a:{value:1, enumerable:true},
//   b:{value:2, enumerable:true},
// })

// console.log(obj);

// var obj1 = {
//   name: "x"
// };

// Object.freeze(obj1);

// obj1.name = "Y";

// console.log(obj1);
// console.log(Object.isFrozen(obj1));


// var obj2 = {n:1};

// Object.seal(obj2);

// delete obj2.n;
// console.log(obj2);

// obj2.n = 2;
// console.log(obj2);

// console.log(Object.isSealed(obj2));



// var str = "Hello";

// var string = str;

// console.log(str == string);

// console.log("5" + "50" - 5);

// var a = {
//   x:1,
//   nested:{
//     z:9
//   }
// }

// var spread = {...a};
// spread.nested.z = 99
// spread.x = 11;
// console.log(spread.nested.z);
// console.log(a.nested.z);
// console.log(a.x);


// var a2 = {x:1, n:{k:2}};
// var s2 = Object.assign({},a2);
// s2.n.k = 5;

// console.log(a2.n.k);


// var map = new Map();

// map.set("a",1);
// map.set({id:2}, "obj");

// console.log(map);

// console.log(map.get("a"));

// console.log(map.has("a"));
// map.delete("a");

// console.log(map.has("a"));

// console.log(map);

// map.set("name" , "Meer")
// map.set("age", 25);

// console.log(map);

// map.clear();
// console.log(map);

// var map = new Map();

// map.set("name","Meer Quais");
// map.set("age", 25);
// map.set("email","meerquais017@gmail.com");


// for(var prop of map.keys()){
//   console.log(prop);
  
// }
// for(var prop of map.values()){
//   console.log(prop);
  
// }




// var map = new Map();

// map.set("name","Meer Quais");
// map.set("age", 25);
// map.set("email","meerquais017@gmail.com");


// for(var [k,v] of map.entries()){
//   console.log(k , v );
  
// }


// var proto = {say(){return "hi";}};

// var obj = Object.create(proto);

// console.log(obj.say());

// obj.x = 1; 

// console.log(obj.hasOwnProperty("x"));
// console.log(obj.hasOwnProperty("say"));

// var jo = JSON.stringify({a:1,b:2});
// var ja = JSON.stringify([1,2,3]);

// console.log(jo);
// console.log(ja);

// var j = JSON.stringify({a:1},null,2); // "{"

// console.log(j);

// var person = {
//   name: "Ali",
//   age: 20
// }


// var user = {
//   name: "ali",
//   age:25,
//   city: "Karachi"
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(var [key,value] of Object.entries(user)){
//   console.log(key, value);
  
// }

// var obj1 = {
//   a:1,
//   b:2
// };
// var obj2 ={
//   b:3,
//   c:4
// };

// var merged = Object.assign({},obj1 , obj2);
// console.log(merged);


// var user = {
//   name:"Ali"
// };

// Object.freeze(user);

// user.name = "Meer";
// user.age = 25;

// console.log(user);

// var user = {
//   name: "Ali"
// };

// Object.seal(user);

// user.name = "Meer"; // allowed!
// user.age = 25; // not allowed!
// console.log(user);


// var parent = {
//   greet:function(){
//     console.log("Hello");
//   }
// };

// var child = Object.create(parent);

// child.greet();

// var user = {
//   name: "Meer"
// };

// console.log(Object.hasOwn(user, "name"));
// console.log(Object.hasOwn(user, "age"));

// var user = Object.create({},{
//   id: {value: 1, enumerable:false},
//   name:{value:"Meer" , enumerable:true}
// });

// console.log(Object.getOwnPropertyNames(user));

// var user = {};


// Object.defineProperty(user,"name",{
//   value: "meer",
//   writable:false
// })

// user.name = "Meer Quais";

// console.log(user.name);


// var arr = [["name" , "Meer"], ["age", 25]];

// var obj = Object.fromEntries(arr);

// console.log(obj);


// var original = {user:{name: "Ali"}};

// var copy = Object.assign({},original);

// copy.user.name = "Meer";

// console.log(original.user.name);


var map = new Map();

map.set("name", "Ali");
map.set("age", 22);

// console.log(map);
// console.log(map.get("name"));
// console.log(map.has("age"));
// console.log(map.has("gender"));
// map.delete("age");
// console.log(map.has("age"));;
// console.log(map);
// // map.clear();
// console.log(map);
// console.log(map.size);


// for(var key of map.keys()){
//   console.log(key);
  
// }
// for(var value of map.values()){
//   console.log(value);
  
// }
// for(var [key, value] of map.entries()){
//   console.log(key, value);
  
// }


// {
//   "name": "Ali",
//   "age": 22,
//   "isStudent":true
// }


// var obj = {
//   name:"Meer",
//   age:25,
//   isStudent: true
// }

// var jsonFormat = JSON.stringify(obj);

// console.log(typeof jsonFormat);


// var user = {
//   name: "Ali",
//   marks:{
//     math:85,
//     english:90,
//     comp:89
//   }
// };


// var json = JSON.stringify(user);
// console.log(json);

// var arr = [1,2,3,4, "Meer"];
// console.log(JSON.stringify(arr));

// var obj = {
//   name:"Meer",
//   sayHi: function(){
//     console.log("hi");
//   }
// }

// console.log(JSON.stringify(obj));

// var jsonString = 
// '{"name":"Ali","age":22,"isStudent":true}';

// var obj = JSON.parse(jsonString);

// console.log(obj.name);
// console.log(obj.age);

// var obj = {
//   functionName: function(){
//     console.log("Hello From Obj");;
    
//   }
// };

// obj.functionName();

// var obj = {
//   functionName: function(){
//     console.log("Hello there!");
    
//   }
// }

// var ref = obj.functionName;

// ref();

var obj = {
  name:"Meer",
  fn: function(){
    console.log(this.name);
  }
}

obj.fn();

var ref = obj.fn;

ref()