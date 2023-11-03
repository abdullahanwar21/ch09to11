//  Q-1
let city = prompt("ENter Your City Name ?");
if (city === "karachi") {
  document.write("welcome to city of lights </br>");
}
// Q-2
let gender = prompt("ENter Your Gender ?");
if (gender === "male") {
  document.write("Good Morning Sir </br>");
} else {
  document.write("Good Morning Ma'am </br>");
}
//  Q-3
let signalColor = prompt("Enter Traffic Color");
if (signalColor === "red") {
  document.write("Must Stop </br>");
} else if (signalColor === "yellow") {
  document.write("Ready to move </br>");
} else if (signalColor === "green") {
  document.write("Move now </br> ");
}

//  Q-4
let feulLiter = +prompt("How much u have fuel in your car !");

if (feulLiter < 0.25) {
  document.write(" Please refill the fuel in your car </br>");
} else {
  document.write("Enjoy Your Journey </br>");
}

// Q-5

let totalMarks = 300;
let subjectOne = +prompt("ENter Your First Subject Marks");
let subjectTwo = +prompt("ENter Your Second Subject Marks");
let subjectThree = +prompt("ENter Your Third Subject Marks");
let obtMarks = subjectOne + subjectTwo + subjectThree;
let grade;
let reMarks;
let percentage = (obtMarks / totalMarks) * 100;
// Math.floor(percentage);
if (percentage >= 80) {
  grade = "A-One grade";
  reMarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A grade";
  reMarks = "Good";
  // document.write(grade);
} else if (percentage >= 60) {
  grade = "B";
  reMarks = "You Need To be Improved";
} else {
  grade = "Fail";
  reMarks = "Sorry";
}
document.write("<h2>Marks Sheet</h2>");

document.write(`Total Marks ${totalMarks} <br>`);
document.write(`Total Marks ${obtMarks} <br>`);
document.write(`Total Marks ${grade} <br>`);
document.write(`Remarks ${reMarks} <br>`);
