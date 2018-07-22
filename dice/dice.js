// var dice1 = "img/dice1.png";
// var dice2 = "img/dice2.png";
// var dice3 = "img/dice3.png";
// var dice4 = "img/dice4.png";
// var dice5 = "img/dice5.png";
// var dice6 = "img/dice6.png";
//
// // var topNumber = "img/dice1";
// // var bottomNumber = 1;
//
// var randomNumber = Math.floor(bottomNumber)

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};

