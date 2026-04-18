// var display = document.getElementById("display");
// var startBtn = document.getElementById("start");
// var stopBtn = document.getElementById("stop");
// var resetBtn = document.getElementById("reset");


// // console.log(display);
// // console.log(startBtn);
// // console.log(stopBtn);
// // console.log(resetBtn);

// var hours = 0;
// var minutes = 0;
// var seconds = 0;

// var timer = null;


// function showTime(){
//   var h = hours;
//   var m = minutes;
//   var s = seconds

//   if(h < 10){
//     h = "0" + h
//   }
//   if(m < 10){
//     m = "0" + m
//   }
//   if(s < 10){
//     s = "0" + s
//   }

//   display.textContent = h + ":" + m + ":" + s;
// }

// function startTimer(){

//   if(timer !== null){
//     return;
//   }


//   timer = setInterval(function(){

//     seconds++;

//     if(seconds === 60){
//       seconds = 0;
//       minutes++
//     }
//     if(minutes === 60){
//       minutes = 0;
//       hours++
//     }

//     showTime();
//   },1000)
// }

// function stopTimer(){
//   clearInterval(timer) // stop setInterval

//   timer = null; // reset variable
// }

// function resetTimer(){
//   clearInterval(timer);
//   timer = null;
//   hours = 0;
//   minutes = 0;
//   seconds = 0;

//   showTime();
// }



// showTime();

// var plan1 = {
//   name:"basic",
//   price: 3.99,
//   space:100,
//   data:1000,
//   pages:10,
//   discountMonths: [6,7,8,9]
// }


//  var arr = ["Basic" , 3.99 , 100 , 1000 , 10];
// console.log(plan1);
// console.log(arr);

// plan1.price = 4.99;

// plan1.age = 20;

// console.log(plan1);


// console.log(plan1.name);

// var propertyExists = "market" in plan1;
// var propertyExists = "price" in plan1;

// console.log(propertyExists);

// function calcAnnual(){
//   var bestPrice = plan1.price;
//   var currDate = new Date();
//   var thisMonth = currDate.getMonth();

//   for(var i = 0; i < plan1.discountMonths.length; i++ ){

//     if(plan1.discountMonths[i] === thisMonth){
//       bestPrice = plan1.price * .8;
//       break;
//     }

//   }

//   return bestPrice * 12;
// }

// var price = calcAnnual()

// console.log(price);




// var plan1 = {
//   name:"Basic",
//   price: 3.99,
//   space:100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [6,7,8,9],
//   calcAnnual: function(percentIfDisc){
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMonth = currDate.getMonth();

//     for(var i = 0; i < plan1.discountMonths.length; i++){

//       if(plan1.discountMonths[i] === thisMonth){
//         bestPrice = plan1.price * percentIfDisc;
//         break;
//       }
//     }

//     return bestPrice * 12;
//   }
// }


// var price = plan1.calcAnnual(2);

// console.log(price);


// function Plan(name,price,space,data,pages){
//   this.name = name;
//   this.price = price;
//   this.space = space;
//   this.data = data;
//   this.pages = pages
// }


// var plan1 = new Plan("Basic", 3.99 , 100 , 1000 , 10);
// var plan2 = new Plan("Professional" , 5.99 , 500 , 5000 , 50);

// console.log(plan1);
// console.log(plan2);


// function Student(name,age,rollNumber,email,batch){
//   this.name = name;
//   this.age = age;
//   this.rollNumber = rollNumber;
//   this.email = email;
//   this.batch = batch;
// }


// var std1 = new Student("Mujeeb" , 18, 1, "mujbeen@gmail.com", 16);
// var std2 = new Student("Areeb", 17 , 2, "Areeb@gmail.com" , 16);
// var std3 = new Student("Faraz", 36 , 3 , "faraz@gmail.com" , 16);
// var std4 = new Student("Usman", 18 , 4 , "usman@gmail.com", 16);


// console.log(std1);
// console.log(std2);
// console.log(std3);
// console.log(std4);



function Plan(name,price,space,data,pages,discountMonths){

  this.name = name;
  this.price = price;
  this.space = space;
  this.data = data;
  this.pages = pages;
  this.discountMonths = discountMonths;

  this.calcAnnual = function(PercentIfDisc){

    var bestPrice = this.price;
    var currDate = new Date();
    var thisMonth = currDate.getMonth();

    for(var i = 0; i < this.discountMonths.length; i++){
      if(this.discountMonths[i] === thisMonth){
        bestPrice = this.price * PercentIfDisc;
        break;
      }
    }

    return bestPrice * 12
  }
}

var plan1 = new Plan("basic", 3.99 , 100 , 1000 , 10 , [7,8]);
var plan2 = new Plan("Prem" , 5.99, 500 , 5000 , 50 , [6,7,9,11]);
var plan3 = new Plan("Ultimate", 9.99 , 2000 , 20000 , 500, [6,7]);


var annualPrice = plan1.calcAnnual(.85);
var annualPrice1 = plan2.calcAnnual(.85);
var annualPrice2 = plan3.calcAnnual(.85);

console.log(annualPrice);
console.log(annualPrice1);
console.log(annualPrice2);


