// quiz begins, no answers correct
var correct = 0;

// ask questions
var answer1 = prompt("What is ((6+4)-5)+5 equal to ?");
if ( answer1 === '10' ) {
  correct += 1;
}
var answer2 = prompt("Now, what is (20/2)+(10*2) equal to?");
if ( answer2 === '30' ) {
  correct += 1;
}
var answer3 = prompt("What language do you use to style web pages?");
if ( answer3.toUpperCase() === 'CSS' ) {
  correct += 1;
}
var answer4 = prompt("What language do you use to build the structure of web pages?");
if ( answer4.toUpperCase() === 'HTML' ) {
  correct += 1;
}
var answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === 'JAVA SCRIPT' ) {
  correct += 1;
}

// output results
document.write("<p>You got " + correct + " out of 5 questions correct.<p>");

// output rank
if ( correct === 5 ) {
  document.write("<p><strong>You earned the jack pot!</strong></p>");
} else if (correct >= 3) {
  document.write("<p><strong>You earned a set of steak knives!</strong></p>");
} else if (correct >= 2) {
  document.write("<p><strong>You earned a doggy cookie!</strong></p>");
} else {
  document.write("<p><strong>Man, you did not do so good. Try again?</strong></p>");
}