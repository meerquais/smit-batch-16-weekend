console.log("JavaScript Connected!");

// for(var i = 1; i <= 100;i++){
//   console.log(i);
// }



// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// var fruits = ["apple", "Mango" , "Banana" , "Orange"];

// for(var i = 0;i < fruits.length;i++){
//       console.log(fruits[i]);
// }


// var arr = [3 , 7 , 12 , 5];
// var found = false;

// for(var i = 0; i < arr.length; i++){

//   if(arr[i] === 12){
//     found = true;
//     break;
//   }
// }
// if(found){
//   console.log("Found it!");
// }else{
//   console.log("Not Found!");
// }


// var arr = [2,4,6,9];
// var allEven = true;

// for(var i =0; i < arr.length;i++){

//   if(arr[i] % 2 !== 0){
//     allEven = false;
//     break;
//   }
// }
// if(allEven){
//   console.log("Sab Even hai");
// }else{
//   console.log("Kuch odd bhi hai.");
// }

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo "];

var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

var fullNames = [];


// for(var i = 0; i < firstNames.length; i++){

//   for(var j = 0; j < lastNames.length; j++){

//    if(i === j){
//     fullNames.push(firstNames[i] + " " + lastNames[j])
//    }
//   }
  
// }

// console.log(fullNames)


for(var i = 0; i < firstNames.length && i < lastNames.length; i++){
    fullNames.push(firstNames[i] + " " + lastNames[i])
}

console.log(fullNames);



