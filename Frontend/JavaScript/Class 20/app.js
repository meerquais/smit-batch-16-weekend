console.log("JavaScript Connected!");



// function checkAddress(){

//   var val = document.getElementById("email").value;


//   if(val === ""){
//     alert("Email is required!");
//   }

//   console.log(val);
// }


// console.log(document);



// function checkFormat(){

//   var val = document.getElementById("email").value.trim();

//   var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);


//   if(val === ""){
//     alert("Email is required!");
//   }else if(!regex){
//     alert("Email format is wrong!");
//   }else{
//     console.log(val);
    
//   }
// }


// function checkEmail(){


//  var val = document.getElementById("email").value.trim();
//  var  err = document.getElementById("emailErr");

//   var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);


//   if(val === ""){
//       err.textContent = "Email is required!"
//   }else if(!regex){
//     err.textContent = "Email format is wrong!"
//   }else{
//     console.log(val);
//   }

// }


// function fillCity(){

//   var cityName;
//   var zipEntered = document.getElementById("zip").value;

//   switch(zipEntered){
//     case "60608":
//       cityName ="chicago";
//       break;
//     case "68114":
//       cityName = "Omaha";
//       break;
//     case "53212":
//       cityName = "milwaukee";
//       break;
//     case "71500":
//       cityName = "Karachi";
//   }


//   document.getElementById("city").value = cityName;
// }



// function fillCountry(){

//   var country = "";
//   var code = document.getElementById("cc").value;

//   switch(code){
//     case "92":
//       country = "Pakistan";
//       break;
//     case "91":
//       country = "India";
//       break;
//     case "93":
//       country = "Afghanistan";
//   }



//   if (code === "") {
//     alert("Code is required!")
//   }

//   document.getElementById("country").value = country;
  
// }


// console.log(document.getElementById("cc"));


// console.log(document.getElementById("name").innerHTML);

// document.getElementById("name").innerHTML = "test"



// function changeText(){
//   document.getElementById("demo").innerHTML = "Text Changed!"
// }

// function makeBold(){

//   document.getElementById("demo1").innerHTML = "<b>This is bold text now.</b>"

// }


// function showList(){

//   document.getElementById("myList").innerHTML = " <ul><li>Apple</li><li>Mango</li><li>Banana</li></ul> ";
// }



// function showImage(){
//   document.getElementById("myImage").innerHTML = "<img src='https://cometinsure.com/blog/wp-content/uploads/2024/08/Best-Fuel-Average-Cars-in-Pakistan.jpg' alt='Car' width='300' height='300'> " 
// }



// function addLink(){
//   document.getElementById("linkBox").innerHTML = "<a href='https://www.google.com' target='_blank'>Google</a>"
// }



// function readContent(){

//   var text = document.getElementById("para").innerHTML;

//   alert("content is " + text)

// }


// function addPara(){

//   document.getElementById("multipara").innerHTML = "<p>para 1</p><p>Para 2</p><p>Para 3</p><p>Para 4</p><p> Para 5</p>"

//   document.getElementById("btn").innerHTML = "Add Paras"
// }

function showTable(){

  document.getElementById("tableBox").innerHTML = "<table border=1><tr><th>Names</th><th>Age</th><td>Ali</td><td>Meer</td></tr></table>"


}