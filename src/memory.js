const arrayImages = ["Paris.PNG", "Barcelona.PNG", "United.PNG", "Chelsea.PNG", "RealMadrid.PNG", "Bayern.PNG"];
const newArray = [];
let hasBeenClicked = [];
let isCardsMatching = [];
let newDivArray = [];
let newDivNum = [];
let clicks = 0;
let counter = 0;
function  shuffleArray(){
  for(let i = 0; i < arrayImages.length; i++){
    newArray.push(arrayImages[i], arrayImages[i])
  }
  for(let i = 0; i < newArray.length; i++){
    let j = Math.floor(Math.random() * i);
    let temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

shuffleArray();

function flip(num) {
  if(clicks < 2 && (!newDivNum.includes(num)) && (!hasBeenClicked.includes(num))){
    isCardsMatching.push(newArray[num]);
    newDivNum.push(num)
    $(`.grid-item${num} .back`).css('background-image', `url(../images/${newArray[num]})`);
    $(`.grid-item${num}`).toggleClass('flipped');
    clicks++;
  }
  console.log(counter, newArray.length)
  if(clicks == 2){
    if(isCardsMatching.length % 2 == 0 && isCardsMatching[0] != isCardsMatching[1]){
      setTimeout(function(){
        $(`.grid-item${newDivNum[0]}`).css('background-color', `#CCD2D9`);
        $(`.grid-item${newDivNum[0]}`).toggleClass('flipped');
        $(`.grid-item${newDivNum[1]}`).css('background-color', `#CCD2D9`);
        $(`.grid-item${newDivNum[1]}`).toggleClass('flipped');
        isCardsMatching = [];
        clicks = 0;
        newDivNum = [];
      }, 2000)
    }
    else{
      isCardsMatching = [];
      clicks = 0;
      let num1 = newDivNum[0];
      let num2 = newDivNum[1];
      hasBeenClicked.push(num1, num2)
      newDivNum = [];
      counter += 2;
    }
  }
  checkIfBoardHasBeenFilled()
}

function  checkIfBoardHasBeenFilled(){
  setTimeout(function(){
    if(counter == newArray.length){
      alert("Well Done");
      setTimeout(function(){
        location.reload();
      }, 1500)
    }
  }, 1000)
}