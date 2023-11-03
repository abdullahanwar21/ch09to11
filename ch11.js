// Q -6
let secretNumber = Math.floor(Math.random() * 10);
let userGuess = +prompt("Guess The Secret Number between 1to10 ");
if (secretNumber === userGuess) {
  document.write(`<h3> Bingooo ! You Guess the Correct Number</h3>`);
} else if (secretNumber === userGuess + 1) {
  document.write(`<h3> “Close enough to the correct answer”.</h3>`);
}
document.write("The Secret Number is :", secretNumber, "<br>");
// Q-7
let checkGivenNumber = +prompt(
  "ENter Number Number Is divisible with 3 or Not"
);
if (checkGivenNumber % 3 == 0) {
  document.write("Your Given Number IS Divisible With 3 <br>");
} else {
  document.write("Your Given Number IS Not Divisible With 3 <br>");
}
// Q-8
let inputNumber = +prompt("Enter An odd or EVen Number ");
let reminder = inputNumber % 2;
if (reminder == 0) {
  document.write("The Input Number Is Even <br>");
} else {
  document.write("The Input Number Is Odd <br>");
}
//  Q-9
let temperature = +prompt("Enter Temperature ");
let message;
if (temperature > 40) {
  message = "“It is too hot outside.”";
} else if (temperature > 30) {
  message = "The Weather today is Normal.";
} else if (temperature > 20) {
  message = "Today’s Weather is cool.";
} else if (temperature > 10) {
  message = "OMG! Today’s weather is so Cool.";
} else {
  message = "Please Enter Correct Temperature.";
}
document.write(`<h3>${message}</h3>`);
