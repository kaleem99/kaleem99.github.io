var array = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F"];

var flipBack = "", firstvalue, secondValue, cardsHit = 0, cardChosen = 0;

function shuffleArray() {
  for (var i = 0; i < array.length; i++) {
    var j = Math.floor(Math.random() * i);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffleArray();

function timer() {
  setTimeout(checkforMatch, 500);
}

function onClick(index) {
  if (cardChosen == 0) {
    var allDivElements = document.getElementsByClassName("div-Elements");
    firstvalue = index;
    allDivElements[index].innerHTML = array[index];
    cardChosen += 1;
  } else {
    var allDivElements = document.getElementsByClassName("div-Elements");
    cardChosen += 2;
    secondValue = index;
    allDivElements[index].innerHTML = array[index];
    timer();
  }
}

function checkIfBoardIsFilled() {
  if (cardsHit == array.length / 2) {
    document.getElementById("H2").innerHTML = "welldone";
    document.getElementById("colorBox").style.backgroundColor = "blue";
    alert("Well done you completed the game press ok to play again");
    setTimeout(function () {
      location.reload();
    }, 2000);
  }
}
function timeOut(){
   setTimeout(function () {
    document.getElementById("colorBox").style.borderColor = "black";
    }, 1000);
}
function checkforMatch() {
  if (array[firstvalue] == array[secondValue]) {
    var allDivElements = document.getElementsByClassName("div-Elements");
    cardsHit++;
    cardChosen = 0;
    document.getElementById("H2").style.color = "blue";
    document.getElementById("H2").innerHTML = "Match Found";
    document.getElementById("colorBox").style.borderColor = "blue";
    timeOut();
  } else if (array[firstvalue] !== array[secondValue]) {
    var allDivElements = document.getElementsByClassName("div-Elements");
    allDivElements[firstvalue].innerHTML = flipBack;
    allDivElements[secondValue].innerHTML = flipBack;
    cardChosen = 0;
    document.getElementById("H2").style.color = "red";
    document.getElementById("H2").innerHTML = "Match Not Found Try Again";
    document.getElementById("colorBox").style.borderColor = "red";
    timeOut();
  }
  checkIfBoardIsFilled();
}