console.log("JavaScript Connected!");


// function table(){
//   document.getElementById("tableBox").innerHTML = "<table><tr><td>Apple</td><td>Mango</td><td>Banana</td></tr></table>";
// }


// function expand(){

//   document.getElementById("p1").innerHTML = "This is intro text. Here is the full text shown after clickling Read more.";
// }

// function toggleMore(){

//   var dots = document.getElementById("dots");
//   var more = document.getElementById("more");
//   var btn = document.getElementById("btn");


//   if(more.style.display === "none"){
//     more.style.display = "inline";
//     dots.style.display = "none";
//     btn.innerHTML = "Read less";
//   }else{
//     more.style.display = "none";
//     dots.style.display ="inline";
//     btn.innerHTML = "Read more";
//   }
// }


// var fullText = "My name is meer quais and i am a full stack";

// var limit = 40;

// var element = document.getElementById("p1");


// if(fullText.length > limit){
//   element.innerHTML = fullText.slice(0,limit) +"... <a href='javascript:void(0)' onclick='showFull()' >Read more</a>"
// }else{
//   element.innerHTML = fullText
// }

// function showFull(){
//   element.innerHTML= fullText;
// }


// function makeInv(){

//   document.getElementById("ugly").className = "hidden";
// }



// function swapImg(id){
//   document.getElementById(id).src = "./assets/car2.jpg" ;
// }

// function swapImg2(id){
//   document.getElementById(id).src = "./assets/car.webp"
// }

// function swapImg(id){
//   document.getElementById(id).className = 'thumbbig thumb'
// }

// function swapImg2(id) {

//   document.getElementById(id).className = 'thumb'

// }

// function swapPicture(id){
//   document.getElementById(id).src = "./assets/car2.jpg";
// }



// function swapPicture(id, newPic){
//   document.getElementById(id).src = newPic;
// }


// function makeBig(){

//   document.getElementById("p1") .className += " big";
// }


// function makeBig(){
//  el =  document.getElementById("p1");

//  el.style.fontSize = "2em";
//  el.style.color = "red";
// }


function doubtTextSize(){
  var para = document.getElementsByTagName('p');

  console.log(para);
  

  for(var i =0;i < para.length;i++){
    para[i].style.fontSize = "2em";
  }




}