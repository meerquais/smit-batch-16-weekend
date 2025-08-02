// console.log("JavaScript Connected!");


// var str = "Hello World!"

// console.log(str.length);

// var str = "Hello World!"

// let count = 0;

// for(var i = 0; i < str.length; i++){
//   count++
// }

// console.log("count" , count);


// var sentence = "JavaScript is Powerful";

// var copy = sentence.slice(0,10);

// console.log(copy);

// var str = "JavaScript is fun";
// var result = "";

// for(var i = 0; i < 10; i++){
//   result += str[i];
// }

// console.log("result: " ,result);


// var line = "I love love JavaScript";

// var index = line.indexOf("love");

// console.log(index);

// var str = "JavaScript is Amazing";

// var search = "Script";

// var fountAt = -1;

// for(var i = 0; i <= str.length - search.length; i++){

//   var match = true;

//   for(var j = 0; j < search.length; j++){
//     if(str[i + j] !== search[j]){
//       match=false;
//       break;

//     }
//   }
//   if(match){
//     fountAt = i;
//     break;
//   }
// }

// console.log("found at:" , fountAt);


// var word = "Karachi";

// console.log(word.charAt(2));

// var word = "London";

// var index = 4;

// var char = "";

// for(var i = 0; i < word.length; i++){

//   if(i === index){
//     char = word[i];
//     break;
//   }
// }

// console.log("Character at index :" + index + " is " + char);

// var original = "I love coding";

// var find = "coding";

// var replaceWith = "JavaScript";

// var result = "";


// for(var i = 0; i < original.length; i++){

//   if(original.slice(i, i + find.length) === find){
//     result += replaceWith;
//     i += find.length -1;
//   }else{
//     result += original[i];
//   }
// }

// console.log("Updated:" , result);

// var sentence = "i like apples and apples";

// var updated = sentence.replace("apples" , "Oranges");

// console.log(updated);


// var sentence = "i like apples. Apples are sweet. Apples are red.";

// var updated = sentence.replace(/apples/gi , "oranges");

// console.log(updated);


// var original = "i love coding";

// var find = "coding";

// var replaceWith = "JavaScript";

// var result = "";

// for(var i = 0; i < original.length; i++){

//   if(original.slice(i, i + find.length)=== find){
//     result += replaceWith;
//     i += find.length -1;
//   }else{
//     result += original[i];
//   }

// }

// console.log("Updated:" , result);


// var original = "That is my car. It is new";

// var find = "is";

// var replaceWith = "was";


// var result = "";

// for(var i = 0 ; i < original.length; i++){

//   if(original.slice(i, i + find.length) === find){

//     result += replaceWith;

//     i += find.length -1
//   }else{
//     result += original[i];
//   }
// };


// console.log(original);
// console.log("Updated value: " , result);


var original = "Ali is a good boy. Ali plays Cricket";

var find = "Ali";

var replaceWith = "Ahmed";

var result = "";

for(var i = 0; i < original.length; i++){

  if(original.slice(i , i + find.length) === find){

    result += replaceWith;
    i += find.length -1;
  }else{
    result += original[i];
  }
}

console.log(result);