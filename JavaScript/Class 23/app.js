console.log("JavaScript Connected!");


// var element = document.getElementById("para");

// console.log(element);

// element.innerText = "New Para!";

// console.log(element);


// creating element node 

// var newPara = document.createElement("p");

// newPara.textContent = "I am a new Para!";

// document.getElementById("myDiv").appendChild(newPara);

// console.log(document.getElementById("myDiv"));


// removing element node

// var element = document.getElementById("delete");

// element.remove();

// how to style 

// element.style.backgroundColor = "red";


// var p1 = document.getElementById("p1");

// console.log(p1.parentNode); // get parents (div);

// console.log(p1.nextSibling); // might be a text node

// console.log(p1.nextElementSibling);

// childNodes vs children

// var list = document.getElementById("list");

// console.log(list.childNodes.length);

// console.log(list.children.length);


// getting first child of an element.


// var wrap = document.getElementById("wrap");

// console.log(wrap.firstChild); might be a text node(white space ya newline)
// console.log(wrap.firstElementChild); // always element;


// var p = document.getElementById("p");

// console.log(p.childNodes);

// var element = p.querySelector("em");

// console.log(element.firstChild.nodeValue);

// var root = document.getElementById("root");

// var kuchBhi = document.createElement("p");

// kuchBhi.textContent = "This is added dynamically";

// root.appendChild(kuchBhi);

// console.log(kuchBhi);


// var p = document.getElementsByTagName("p");


// var contents = p[4].innerHTML;

// console.log(contents);
// console.log(p);

// var div = document.getElementById("cal");

// var p = div.getElementsByTagName("p");

// console.log(p);
// console.log(p[1].innerHTML);


// var demo = document.getElementById("demo");

// console.log(demo.childNodes.length);
// console.log(demo.children.length);

// var menu = document.getElementById("menu");

// console.log(menu.firstChild); // maybe gets text node.
// console.log(menu.firstElementChild); // gets element node.

// console.log(menu.lastChild); // maybe returns text node.
// console.log(menu.lastElementChild); // returns element node.


// function getNthElementChild(parent , n){

//   var count = 0;

//   for(var i = 0 ; parent.childNodes.length;i++){
//     var node = parent.childNodes[i];

//     if(node.nodeType === Node.ELEMENT_NODE){
//       count++
//       if(count === n)return node;
//     }
//   }

//   return null;
// }

// var d = document.getElementById("humpty");

// var second = getNthElementChild(d,3);

// console.log(second);


// second.textContent = "All his men.";


// var second = document.querySelectorAll("#humpty p")[1];

// second.textContent = "All his men."



// var p1 = document.getElementById("p1");

// console.log(p1.nextSibling);// maybe return text node.
// console.log(p1.nextElementSibling.nextElementSibling.nextElementSibling);// return element node.



// var p2 = document.getElementById("p2");

// console.log(p2.previousSibling);// maybe return text node.
// console.log(p2.previousElementSibling);// return element node.


// var root = document.getElementById("root");

// var newPara = document.createElement("p");

// newPara.textContent = "Created a new para!";

// root.appendChild(newPara);

// console.log(root.firstElementChild.textContent);


// var box = document.getElementById("box");

// for(var i=0;box.childNodes.length;i++){
//   console.log(box.childNodes[i].nodeType);
//   }


// console.log(document);

// var box = document.getElementById("box");

// var pCounter = 0;

// for(var i = 0;box.childNodes.length;i++){

//   if(box.childNodes[i].nodeType === 1){
//     pCounter++
//   }

//   if(pCounter === 2){
//     box.childNodes[i].textContent = "replaced!"
//     break;
//   }


// }


// document.getElementById("target").textContent = "Replaced!"


// function cleanTextNodes(parent){

//   for(var i = parent.childNodes.length -1; i >=0 ; i--){
//     var n = parent.childNodes[i];

//     if(n.nodeType === 3 && n.nodeValue.trim() === ""){
//       parent.removeChild(n);
//     }
    
//   }


// }
// var parent = document.getElementById("box");
// cleanTextNodes(parent)

// console.log(parent.childNodes.length);




//  for(var i = parent.childNodes.length -1; i >=0 ; i--){
//     console.log(parent[i]);
    
//   }



