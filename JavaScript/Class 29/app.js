console.log("JavaScript Connected!");


// function Plan(name,price,space,data,pages){

//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.data = data;
//     this.pages = pages;
// }

// var plan1 = new Plan("Basic", 3.99 , 100 , 1000 , 10);
// var plan2 = new Plan("Basic", 100 , 1000 , 10);

// console.log(plan1);
// console.log(plan2);

// function Plan(name,price,space,data,pages,discountMonths){

//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.data = data;
//     this.pages = pages;
//     this.discountMonths = discountMonths;
//     this.calcAnnual = function(percentIfDiscount){

//       var bestPrice = this.price;
//       var currDate = new Date();
//       var thisMonth = currDate.getMonth();

//       for(var i = 0; i < this.discountMonths.length ; i++){

//         if(this.discountMonths[i] === thisMonth){
//           bestPrice = this.price * percentIfDiscount;
//           break;
//         }
//       }

//       return bestPrice * 12
//     }
// }

// var p1 = new Plan("Basic" , 3.99, 100 , 1000 , 10, [6,7]);
// var p2 = new Plan("Premim", 5.99 , 500 , 5000 , 50 , [6,7,11]);
// var p3 = new Plan("Ultimate" , 9.99 ,2000 , 20000 , 500 , [7,8,9] );


// var annualPrice = p1.calcAnnual(.7);
// var annualPrice1 = p2.calcAnnual(.7);
// var annualPrice2 = p3.calcAnnual(.7);



// console.log(annualPrice);
// console.log(annualPrice1);
// console.log(annualPrice2);

// function Plan(name,price,space,data,pages,discountMonths){
//   this.name = name;
//   this.price = price;
//   this.space = space;
//   this.data = data;
//   this.pages = pages;
//   this.discountMonths = discountMonths
// }

// var p1 = new Plan("Basic" , 3.99 , 100 , 1000 , 10, [6,7]);
// var p2 = new Plan("Premium" , 5.99 , 500 , 5000 , 50, [6,7,11]);
// var p3 = new Plan("Ultimate" , 9.99 , 2000 , 20000 , 500, [6,7,8,9]);

// Plan.prototype.calcAnnual = function(percentIfDiscount){
//       var bestPrice = this.price;
//       var currDate = new Date();
//       var thisMonth = currDate.getMonth();

//       for(var i = 0; i < this.discountMonths.length ; i++){

//         if(this.discountMonths[i] === thisMonth){
//           bestPrice = this.price * percentIfDiscount;
//           break;
//         }
//       }

//       return bestPrice * 12
// };


// var a = p1.calcAnnual(.8);
// var b = p2.calcAnnual(.8);
// var c = p3.calcAnnual(.8);

// console.log(a);
// console.log(b);
// console.log(c);

// Plan.prototype.cancellable = true;

// console.log(p1.cancellable);
// console.log(p2.cancellable);

// p1.cancellable = false;

// console.log(p1.cancellable);
// console.log(p2.cancellable);


// function Plan(name,price,space,data,pages,discountMonths){
//   this.name = name;
//   this.price = price;
//   this.space = space;
//   this.data = data;
//   this.pages = pages;
//   this.discountMonths = discountMonths
// }

// var p1 = new Plan("Basic" , 3.99 , 100 , 1000 , 10, [6,7]);
// var p2 = new Plan("Premium" , 5.99 , 500 , 5000 , 50, [6,7,11]);
// var p3 = new Plan("Ultimate" , 9.99 , 2000 , 20000 , 500, [6,7,8,9]);



// var listOfProperties = [];

// for(var prop in p1){
//   listOfProperties.push(prop);
// }

// console.log(listOfProperties);


// var p1 = {
//   name:"basic",
//   price:3.99,
//   space:100,
//   data: 1000,
//   pages:10
// }

// for(var prop in p1){
//   console.log(prop);
  
// }


// var p1 = {
//   name:"basic",
//   price:3.99,
//   space:100,
//   data: 1000,
//   pages:10
// }

// for(var prop in p1){
//   console.log(prop + ": " + p1[prop]);
  
// }

// "propertyNam" in objectName;


// var plan1 = {
//   name:"Basic",
//   price:3,
//   space:100
// }

// console.log("price" in plan1);
// console.log("locaion" in plan1);

// plan1.calcAnnual = function(){
//   return this.price * 12
// };

// console.log("calcAnnual" in plan1);


// function Plan(name,price){
//   this.name = name;
//   this.price = price;
// }

// Plan.prototype.cancellable = true;


// var p1 = new Plan("Basic" , 3.99);

// console.log("cancellable" in p1);

// objectName.hasOwnProperty("propertyName"); 


// function Plan(name,price){
//   this.name = name;
//   this.price = price;
// }

// Plan.prototype.cancellable = true;


// var p1 = new Plan("Basic" , 3.99);

// // console.log(p1.hasOwnProperty("price"));
// // console.log(p1.hasOwnProperty("cancellable"));

// // var listOfProperties = [];
// // for(var prop in p1){
// //   listOfProperties.push(prop)
// // }

// // console.log(listOfProperties);

// p1.cancellable = false

// var ownProps = [];

// for(var prop in p1){
//   if(p1.hasOwnProperty(prop)){
//     ownProps.push(prop);
//   }
// };

// console.log(ownProps);
