const numberButtons = document.getElementsByClassName("number");
// console is an object provided by the browser (or node js) for debuggin purposes
// the log method (in the cosole object) prints the value of the peremeters passed in, as a string - to the broswer console
console.log("numberButtons: ", numberButtons);

function printButtonNumber(mouseEvent) {
    console.log("printButtonNUmber called", mouseEvent.srcElement.innerText);
    const resultBox = document.getElementById("display");
    console.log("Able to print in display...", resultBox);
    resultBox.value = resultBox.value + mouseEvent.srcElement.innerText;
}

for (let i=0; i < numberButtons.length; i++) {
    console.log("i: ", i);
    // numberButton at index i
    // would see parenthesis after printButtonNumber if was calling the function - we are setting onclick to the function itself
    numberButtons[i].onclick = printButtonNumber;
}
