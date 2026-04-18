console.log("JavaScript Connected!");

// var parent = document.getElementById("div1");

// var child = parent.firstElementChild;

// var nodeName = child.nodeName;

// console.log(nodeName);



// var parent = document.getElementById("div1");

// var child = parent.firstChild;

// console.log(child.nodeName);

// console.log(child.nodeValue);


// var img = document.getElementById("myImg");

// if(img.nodeName.toLowerCase() === "img"){
//   console.log("This is an Image Element");
// }else{
//   console.log("This is not an image element!");
  
// }

// var para = document.getElementById("para");

// var first = para.firstChild;

// if(first.nodeName === "#text"){
//   console.log("This is a text node: " + first.nodeValue);
  
// }


// 3 main methods 

// 1. hasAttribute(name) ==> check karta hai attribute exist karta hai ya nahi
// 2. getAttribute(name) ==> attribute ki value nikalta hai.
// 3. setAttribute(name, value) ==> Attribute ko set ya update karta hai.

// hasAttribute(name)

// var target = document.getElementById("p1");

// var hasClass = target.hasAttribute("class");

// console.log(hasClass);

// getAttribute(name)

// var targe = document.getElementById("div1");

// var attrVal = targe.getAttribute("class");

// console.log(attrVal);

// setAttribute(name , value)

// var target = document.getElementById("div3");
// target.setAttribute("class" , "highlight" );

// console.log(target);

// // update attribute

// var target = document.getElementById("div4");

// target.setAttribute("class" , " blue");

// console.log(target.getAttribute("class"));

// var list = document.getElementById("p1").attributes;

// console.log(list.length);
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);

// var list = document.getElementById("p1").attributes;

// console.log(list[1].nodeName);
// console.log(list[1].nodeValue);

// var list = document.getElementById("p1").attributes;

// for(var i = 0; i < list.length; i++){
//   console.log("Name: " , list[i].nodeName, "Value: " , list[i].nodeValue);
// }

// var list = document.getElementById("p1");

// list.className = "c1 red highlight"


var tasks = [];


function addTask(){

  var input = document.getElementById("task-input");

  var text = input.value.trim();

  if(text ===""){
    alert("Write Something!");
    return;
  }

  tasks.push(text);
  input.value = "";
  showTasks();

  console.log(tasks);
  
}


function editTask(i){
  var update = prompt("Edit task", tasks[i]);

  if(update !== null && update.trim() !== ""){
    tasks[i] = update.trim();
    showTasks();
  }
}

function deleteTask(i){
  tasks.splice(i,1);
  showTasks();
}


function showTasks(){

  var list = document.getElementById("task-list");
  list.innerHTML = "";

  for(var i = 0; i < tasks.length; i++){
    list.innerHTML += "<li>" + tasks[i]+ " <button onclick='editTask("+i+")'>Edit</button>" + "<button onclick='deleteTask("+i+")'>Delete</button></li>";
  }


}









