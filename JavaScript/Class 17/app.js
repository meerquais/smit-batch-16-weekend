console.log("JavaScript Connected!");

var display = document.getElementById("disply");


function append(value){
  display.value += value

}

function clearDisplay(){
  display.value = ""
}

function delChar(){
  display.value = display.value.slice(0,-1);
}


function calculate(){
  // display.value = eval(display.value)

  // var exp = display.value;
  // var opt = "+-*/%";
  // var error = false;

  // for(var i = 0; i < exp.length -1 ; i++){

  //   var current = exp[i];
  //   var next = exp[i + 1]


  //   if(opt.indexOf(current) !== -1 && opt.indexOf(next) !== -1){

  //     error = true;
  //     break
  //   }
  // }

  // if(error){
  //   display.value = "Error";
  // }else{
  //   display.value = eval(exp)
  // }

    var exp = display.value;
    var opt = "+-/*%";
    var error = false;

    for(var i = 0;i < exp.length -1; i++){

      var current = exp[i];
      var next = exp[i +1];

      if(opt.indexOf(current) !== -1 && opt.indexOf(next) !== -1){


        error =true;
        break;
      }
    }

      if(error){
        display.value = "Error";
      }else{
        display.value = eval(exp)
      }

}



// Global Scope

// var name = "Meer";


// function greet(){
//   console.log("Hello " + name);
// }

// greet();


// Local Scope


// function greet(){
//   let stdName = "Meer";
//   console.log("Hello " + stdName);
// }

// greet();

// console.log(stdName);



// let country = "Pakistan"; // global variable

// function showCity(){
//   let city = "Karachi"; // local variable

//   console.log(city + ", " + country);
// }
// showCity();

// console.log(country);
// console.log(city);



// var city = 1;
// var city = 2;
// var city = 3;

// console.log(city);


// let city = 1;

// city = 2;








