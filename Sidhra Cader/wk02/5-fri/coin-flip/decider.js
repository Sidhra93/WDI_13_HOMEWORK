//var timerId = null;
var headCount = 0;
var tailCount = 0;
var winScore = 5;
var img = document.querySelector("img");
var heads = document.querySelector(".heads>span");
var tails = document.querySelector(".tails>span")
var result = document.querySelector(".result>p");
var flipButton = document.querySelector("button");

var coinFlip = function(){
  var number = Math.round(Math.random());
  if (number === 0) {
    console.log("Heads");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/US_One_Cent_Obv.png/240px-US_One_Cent_Obv.png"
    headCount++;
    heads.textContent = headCount;
  } else {
    console.log("Tails");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/US_One_Cent_Rev.png/240px-US_One_Cent_Rev.png";
    tailCount++;
    tails.textContent = tailCount;
  }
  checkWinner();
}

var checkWinner = function(){
  if (tailCount === winScore) {
    //clearInterval(timerId);
    result.textContent = "WINNER ---> TAILS";
    flipButton.disabled = true;
  } else if (headCount === winScore) {
    //clearInterval(timerId);
    result.textContent = "WINNER ---> HEADS";
    flipButton.disabled = true;
  }
}

flipButton.addEventListener("click", coinFlip);

//timerId = setInterval(coinFlip, 1000);
