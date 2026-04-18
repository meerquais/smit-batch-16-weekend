// var visitorName = "Bilal";
// var productTitle = "T-Shirts";
// var quantity = 4;

// var result = visitorName + " Ordered " + quantity + " " + productTitle + " on daraz";

// document.write(result)



// var name = "Meer Quais";
// document.write(name + "<br/>");
// document.write(name + "<br/>");
// document.write(name + "<br/>");
// document.write(name + "<br/>");

// var num = 4;

// document.write("Table of 4" + " <br />");

// document.write(num + " X 1 = " + num * 1 +  "<br />")
// document.write(num + " X 2 = " + num * 2 +  "<br />")
// document.write(num + " X 3 = " + num * 3 +  "<br />")
// document.write(num + " X 4 = " + num * 4 +  "<br />")
// document.write(num + " X 5 = " + num * 5 +  "<br />")
// document.write(num + " X 6 = " + num * 6 +  "<br />")
// document.write(num + " X 7 = " + num * 7 +  "<br />")
// document.write(num + " X 8 = " + num * 8 +  "<br />")
// document.write(num + " X 9 = " + num * 9 +  "<br />")
// document.write(num + " X 10 = " + num * 10 +   "<br />")


// var number = +prompt("Type a number", 5);

// document.write(number + " X 1 = " + number * 1 + "<br />");
// document.write(number + " X 2 = " + number * 2 + "<br />");
// document.write(number + " X 3 = " + number * 3 + "<br />");
// document.write(number + " X 4 = " + number * 4 + "<br />");
// document.write(number + " X 5 = " + number * 5 + "<br />");
// document.write(number + " X 6 = " + number * 6 + "<br />");
// document.write(number + " X 7 = " + number * 7 + "<br />");
// document.write(number + " X 8 = " + number * 8 + "<br />");
// document.write(number + " X 9 = " + number * 9 + "<br />");
// document.write(number + " X 10 = " + number * 10 + "<br />");

// var a = 4;

// if(++a === 5){
//   alert("Given Number for variable is true");
// }

// var b = 82;

// if(b++ === 83){
//   alert("Given Condition for variable b is true");
// }

// var c = 12;

// if(c++ === 13){
//   alert("Conditon is true");
// }

// if(c === 13){
//   alert("This Condition is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;

// var totalCost = materialCost + laborCost;

// if(totalCost === laborCost + materialCost){
//   alert("The cost equals");
// }

// if(true){
//   alert("True");
// }

// if(false){
//   alert(false);
// }

var subject1 = +prompt("Enter marks for subject 1");
var subject2 = +prompt("Enter marks for subject 2");
var subject3 = +prompt("Enter marks for subject 3");

var totalMarks = +prompt("Enter Total Marks");


var obtainedMarks = subject1 + subject2 + subject3 ;

var percentage = (obtainedMarks / totalMarks) * 100 ;

var grade;
var remarks;


if(percentage >= 80){
  grade = "A-One";
  remarks = "Excellent";
}else if(percentage >= 70){
  grade = "A";
  remarks = "Good";
}else if(percentage >= 60){
  grade = "B";
  remarks = "You need to improve";
}else{
  grade = "fail";
  remarks = "Sorry";
};

document.write("<h3>Mark Sheet</h3>" + "<br />");
document.write("Total Marks: "+ totalMarks + "<br />");
document.write("Marks Obtained:" + obtainedMarks + "<br />");
document.write("Percentage: " + percentage.toFixed(2) + "%" + "<br />");
document.write("Grade: "+ grade + "<br />");
document.write("Remarks: " + remarks + "<br />");

