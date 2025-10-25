// questions 

var quesArray = [
  {
    num:1,
    question:"HTML Stand for",
    Option:{
      a:"Hyper text markup lang",
      b:"Hyper text programming lang",
      c:"Hyper text styling lang",
      d:"Hyper text scripting lang",
    },
    answer:"Hyper text markup lang"
  },
  {
    num:2,
    question:"Which type of JavaScript lang is",
    Option:{
      a:"Object-Oriented",
      b:"Object-base",
      c:"Assembly Lang",
      d:"High level",
    },
    answer:"Object-base"
  },
  {
    num:3,
    question:"The 'function' and 'var' are known as",
    Option:{
      a:"Kewords",
      b:"Data types",
      c:"Declaration statements",
      d:"Prototypes",
    },
    answer:"Declaration statements"
  }
]


// dom selectors

var userForm = document.querySelector(".formwrapper");
var startScreen = document.querySelector(".start");
var quizBody = document.querySelector(".quizbody");
var resultBody = document.querySelector(".result");


var inpName = document.getElementById("inp_name");
var inpEmail = document.getElementById("inp_email")
var inpRoll = document.getElementById("inp_roll");
var inpInst = document.getElementById("inp-inst");


var Ques = document.getElementById("ques");
var Opt = document.getElementById("opt").children

var btn3 = document.querySelector(".btn3");

var ttlq = document.querySelector(".ttlq");
var ttl = document.querySelector("#ttl");
var ra = document.querySelector("#ra");
var wa = document.querySelector("#wa");
var perc = document.querySelector("#perc");
var define = document.querySelector(".define");


var resName = document.getElementById("res-name");
var resEmail = document.getElementById("res-email");
var resRoll = document.getElementById("res-roll");
var resInst = document.getElementById("res-inst");


var circularProgress = document.querySelector(".circular-progress");
var progressValue = document.querySelector(".progress-value");



var totalQus = quesArray.length;
var corrAns = 0;
var wrngAns = 0;
var counter = 0;

function startQuiz(){

  if(!inpName.value || !inpEmail.value || !inpRoll.value || !inpInst.value){
    alert("Please fill all fields");
    return
  }

  userForm.style.display = "none";
  startScreen.style.display = "flex";

  document.getElementById("para-name").innerText = inpName.value
  document.getElementById("para-email").innerText = inpEmail.value
  document.getElementById("para-roll").innerText = inpRoll.value


  ttlq.innerHTML = totalQus;

  loadQuestion()
}

// Load Questions!

function loadQuestion(){

  quizBody.style.display = "flex"
   startScreen.style.display = "none";

  var q = quesArray[counter];

  Ques.innerHTML = q.question;
  Opt[0].innerHTML = q.Option.a
  Opt[1].innerHTML = q.Option.b
  Opt[2].innerHTML = q.Option.c
  Opt[3].innerHTML = q.Option.d

  document.querySelector(".numb").innerHTML = counter + 1


  for(var li of Opt){
    li.classList.remove("correctAns" , "wrongAns" , "disableli")
    li.setAttribute("onclick" , "selectOpt(this)");
  }

  btn3.style.display = "none"
}


// option selection 

function selectOpt(ele){

  if(ele.innerHTML === quesArray[counter].answer){
    ele.className = "correctAns"
    corrAns++
  }else{
    ele.className = "wrongAns";
    wrngAns++

    for(var li of Opt){
      if(li.innerHTML === quesArray[counter].answer){
        li.classList.add("correctAns")
      }
    }
  }

  for(var li of Opt){
    li.classList.add("disableli")
    btn3.style.display = "block"
  }


}


// Next Question!

function nextQuestion(){
    counter++
    if(counter < quesArray.length){
      loadQuestion()
    }else{
      showResult()
    }
}

// Show Result

function showResult(){
  quizBody.style.display = "none";
  resultBody.style.display = "flex";

  resName.innerHTML = inpName.value;
  resEmail.innerHTML = inpEmail.value;
  resRoll.innerHTML = inpRoll.value;
  resInst.innerHTML = inpInst.value;


  ttl.innerHTML = quesArray.length;
  ra.innerHTML = corrAns;
  wa.innerHTML = wrngAns;


  var percentage = Math.round((corrAns / totalQus) * 100);

  perc.innerHTML = percentage;


  if(percentage < 60){
    define.innerHTML = "Sorry, you failed! Try Again!";

    define.classList.add("fail-para");
  }else{
    define.innerHTML = "Congo, You Passed!";

    define.classList.add("pass-para");
  }

  var progressStart = 0;
  var progressEnd;

  if(percentage <= 0){
    progressEnd = 1
  }else{
    progressEnd = percentage
  }


  var speed = 100;
  var progess = setInterval(function(){
    progressStart = progressStart +1
    progressValue.textContent = progressStart + "%"

    circularProgress.style.background = "conic-gradient(#4caf50 " + (progressStart * 3.6) + "deg, #ededed 0deg)"

    if(progressStart >= progressEnd){
      clearInterval(progess)
    }


  }, speed)



}