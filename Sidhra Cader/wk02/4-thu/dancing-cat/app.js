//setTimeout(fn, 5000)
//setInterval()

var catTimerId = null;
var timerIdArray = [];
var startButton = document.querySelector("#start-button");
var stopButton = document.querySelector("#stop-button");
var speedButton = document.querySelector("#speed-button");

var startCatWalk = function(){
  catTimerId = setInterval(catWalk, 100);
  timerIdArray.push(catTimerId);
  startButton.disabled = true;
}

var reverseCatWalk = function(){
  var img = document.querySelector("img");
  var currentLeftOffset = parseInt(img.style.left);
  img.style.left = currentLeftOffset - 10 + "px";
  if (currentLeftOffset <= 0) {
    img.style.left = "0px";
    startCatWalk();
  }
}

var catWalk = function(){
  var img = document.querySelector("img");
  var currentLeftOffset = parseInt(img.style.left);
  img.style.left = currentLeftOffset + 10 + "px";
    if (currentLeftOffset > window.innerWidth - img.width) {
      for (var i = 0; i < timerIdArray.length; i++) {
        clearInterval(timerIdArray[i]);
      }
      catTimerId = setInterval(reverseCatWalk, 100);
      timerIdArray.push(catTimerId);
    }
}

var speedWalk = function(){
  catTimerId = setInterval(catWalk, 50);
  timerIdArray.push(catTimerId);
}

var stopWalk = function(){
  for (var i = 0; i < timerIdArray.length; i++) {
    clearInterval(timerIdArray[i]);
  }
  timerIdArray.splice(0);
}

startButton.addEventListener("click", startCatWalk);
speedButton.addEventListener("click", speedWalk);
stopButton.addEventListener("click", stopWalk);
