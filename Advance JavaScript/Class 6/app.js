console.log("JavaScript Connected!");

// function outer(){
//   var message = "Hello";

//   function inner(){
//     console.log(message);    
//   }

//   return inner;
// }

// var fn = outer();

// fn()

// function makeCounter(){
//   let count = 0;
//   return function(){
//     count += 1;
//     return count
//   };
// };

// let c1 = makeCounter();

// console.log(c1()); // 1
// console.log(c1()); // 2

// let c2 = makeCounter();

// console.log(c2()); // 
// console.log(c2()); // 
// console.log(c2()); // 


// function createPerson(name){
//   var _name = name; // private

//   return {
//     getName: function(){
//       return _name;
//     },
//     setName:function(newName){
//       _name = newName
//     }
//   };
// }

// var p = createPerson("Meer");
// console.log(p.getName());
// p.setName("Hafeez");
// console.log(p.getName());

// var counterModule = (function(){
//   var count = 0; // private
//   function increment(){
//     count++;
//   }
//   function get(){
//     return count
//   }

//   return {
//     inc:increment,
//     getCount: get
//   }


// })();

// counterModule.inc();
// counterModule.inc();
// counterModule.inc();
// console.log(counterModule.getCount());
// console.log(counterModule.getCount());

// var funcs = [];

// for(var i =0;i < 3; i++){
//   funcs.push(function(){
//     console.log(i);    
//   })
// }
// funcs[0]();
// funcs[1]();
// funcs[2]();

// var funcs = [];

// for(var i = 0; i < 3; i++){
//   (function(j){
//     funcs.push(function(){
//       console.log(j);      
//     })
//   })(i)
// }

// funcs[0]();
// funcs[1]();
// funcs[2]();

// var funcs = [];
// for(let i = 0; i < 3;i++){
//   funcs.push(function(){
//     console.log(i);    
//   })
// }

// funcs[0]();
// funcs[1]();
// funcs[2]();

// var person = {
//   name:"Meer",
//   age: 26,
//   greet:function(){
//     console.log("Hello, I am " + this.name);    
//   }
// };

// person.greet();

// function Car(model , year){
//   this.model = model;
//   this.year = year;
//   this.info = function(){
//     console.log("Model: " + this.model + ", Year: " + this.year);    
//   }
// };

// var car1 = new Car("Civic" , 2024);
// var car2 = new Car("City" , 2025);

// car1.info()
// car2.info()

// function Animal(name){
//   this.name = name
// };

// Animal.prototype.speak = function(){
//   console.log(this.name + " makes a sound"); 
// }

// function Dog(name){
//   Animal.call(this, name);
// };

// Dog.prototype = Object.create(Animal.prototype);

// var d = new Dog("Rex");

// d.speak()

// class Student{
//   constructor(name,roll){
//     this.name = name;
//     this.roll = roll
//   }
//   show(){
//     console.log(this.name + " - " + this.roll);    
//   }
// };


// var student1 = new Student("Meer" , 123);
// student1.show();


// class Animal{
//   constructor(name){
//     this.name = name
//   }
//   speak(){
//     console.log(this.name + " makes a sound");
//   }
// }

// class Cat extends Animal{
//   speak(){
//     console.log(this.name + " Meows");    
//   }
// }

// var cat = new Cat("Cat");

// cat.speak();


//Asynchronous JavaScript 

// microtasks , macrotask

// async function getRandomQuote(){
//   try {

//     const respsonse = await fetch('https://dummyjson.com/quotes')

//       // console.log(respsonse.json());

//       const data = await respsonse.json()
//       console.log(data.quotes[0].quote);
//       console.log(data.quotes[0].author);
      
     
      

      
      

      
//     // if(!respsonse.ok)throw new Error('Network response  Not ok ' + respsonse.status);

//     // const data = await respsonse.json();

//     // console.log("Quote:", data.content, '-', data.author);
    
    
//   } catch (error) {
//     console.error("Error fetching quote" , error);
    
//   }
// }

// getRandomQuote()


async function loadRandomImage(){
  const img = document.getElementById("pic");

  try{
    const res = await fetch('https://picsum.photos/200/300');

  
    
    

    img.src = res.url;
    img.onload = ()=> console.log("image loadd");
    img.onerror = ()=> console.log("image Load error");
  }catch(err){
    console.error("fetch error" , err);
 }
}
loadRandomImage()