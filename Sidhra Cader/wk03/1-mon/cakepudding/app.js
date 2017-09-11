console.log("Cake Pudding");

var display = document.querySelector(".word p");
var letterInput = document.querySelector("input");
var guessButton = document.querySelector("button");
var wrongGuess = document.querySelector(".wrong-guess p");
var tries = document.querySelector(".tries p");

var game = {
  word: "brother",
  spaces: "-------"
}

var checkLetter = function(){
  var letters = game.word.split("");
  var spaces = game.spaces.split("");
  var letterGuess = letterInput.value;
  if (letters.includes(letterGuess)) {
    spaces[letters.indexOf(letterGuess)] = letterGuess;
    game.spaces = spaces.join("");

  } else {
    wrongGuess.textContent += letterGuess;
  }
  renderWord();
}


//PRESENTATION


var renderWord = function(){
  display.textContent = game.spaces;
}


renderWord();
letterInput.addEventListener("click", function(){
  letterInput.value = "";
})
guessButton.addEventListener("click", checkLetter)
