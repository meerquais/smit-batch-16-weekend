console.log("JavaScript Connected!");


// var std = {
//   name:"Faraz",
//   age:36,
//   rollNum:12345
// }

// var arr = ["Faraz" , 36 , 123]


// var deal3 = {
//   name:"Prem",
//   data:5000,
//   cost:79.95
// };


// deal3.cost = 79.95;

// deal3.cost = 100;
// deal3.name = "Ulimate";
// deal3.features = ["Guarantee" , "Free Shipping"];
// deal3.membersOnly = false;

// console.log(deal3);

// var deal4 = {};
// deal4.name = "Super Recharge";
// deal4.market = undefined;

// delete deal4.market

// var propertyExists = "market" in deal4;

// console.log(propertyExists);


// console.log(deal4);

// var std= {
//   name:"Meer",
//   course:"Web and dev",
//   rollnumber: 12345,
//   time:3
// }


// delete std.time

// var check = "time" in std;

// console.log(check);


// console.log(std);





// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [6, 7,9]
// };


// function calcAnnual(){

//   var bestPrice = plan1.price;
//   var currDate = new Date();
//   var thisMonth  = currDate.getMonth();
//   for(var i = 0; i < plan1.discountMonths.length;i++){
//     if(plan1.discountMonths[i] === thisMonth){
//       bestPrice = plan1.price * .8;
//       break;
//     }
//   }

//   return bestPrice * 12;
// }

// var annualPrice =  calcAnnual();

// console.log(annualPrice);


// var plan1 = {
//   name:"Basic",
//   price:3.99,
//   space:100,
//   transfer:1000,
//   pages:10,
//   discountMonths: [6,7,9],
//   calcAnnual: function(percentIfDisc){

//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMonth = currDate.getMonth();
//     for(var i = 0;i < plan1.discountMonths.length;i++){
//       if(plan1.discountMonths[i]=== thisMonth){
//         bestPrice = plan1.price * percentIfDisc;
//         break;
//       }
//     }
//     return bestPrice * 12;
//   }
// }

// var obj = plan1.calcAnnual(.8);

// console.log(obj);



// var plan1 = {
//   name:"Basic",
//   price:3.99,
//   space:100,
//   transfer:1000,
//   pages:10,
//   discountMonths: [6,7,9],
//   calcAnnual: function(percentIfDisc){
//     var bestPrice = this.price;
//     var currDate = new Date();
//     var thisMonth = currDate.getMonth();
//     for(var i = 0; i < this.discountMonths.length;i++){
//       if(this.discountMonths[i] === thisMonth){
//         bestPrice = this.price * percentIfDisc;
//         break;
//       }
//     }
//     return bestPrice * 12;
//   }
// };

// // assume current month is not matching because it's oct = 9

// var annual = plan1.calcAnnual(.8);
// console.log(annual); // prints plan1.price * 12


// assume current month is matched.

// var annual = plan1.calcAnnual(.8);
// console.log(annual); // print plan1.price * .8 * 12

// Constructor

// function Plan(name,price,space,transfer,pages){

//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages
// };

// var plan1 = new Plan("Basic" , 3.99 , 100 , 1000, 10);
// var plan2 = new Plan("Premium" , 5.99, 500 , 5000 , 50);
// var plan3 = new Plan("Ulimate", 9.99, 2000 , 20000, 500);


// console.log(plan1.name);
// console.log(plan2.price);
// console.log(plan3.pages);


function StudentData(name,address,rollNum,email){

    this.name = name;
    this.address = address;
    this.rollNum = rollNum;
    this.email = email;
};

var std1 = new StudentData("Mustafa","Baldia",1,"mustafa@gmail.com");
var std2 = new StudentData("Yaseen","Baldia",2,"yaseen@gmail.com");
var std3 = new StudentData("Faizyab","Gulshan",3,"baldia@gmail.com");
var std4 = new StudentData("Usman", "Jama" , 4 , "jama@gmail.com");

console.log(std1);
console.log(std2);
console.log(std3);
console.log(std4);

