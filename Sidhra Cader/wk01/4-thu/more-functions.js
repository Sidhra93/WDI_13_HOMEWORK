//QUESTION_ONE
var newArray;

var lengths = function(stringArray){
  newArray = [];
  // for (var i = 0; i < stringArray.length; i++) {
  //   newArray.push(stringArray[i].length);
  // }
  var wordLength = function(element){
    newArray.push(element.length);
  }
  stringArray.forEach(wordLength);
  return newArray;
}

var array = ["apple", "mango", "orange"];
console.log(lengths(array));

//QUESTION_TWO
var transmogrifier = function(num1, num2, num3){
  ans = Math.pow((num1 * num2), num3);
  return ans;
}

console.log(transmogrifier(2, 2, 3));

//QUESTION_THREE
var wordReverse = function(word){
  var reverseWord = word.split(" ").reverse().join(" ");
  return reverseWord;
}

console.log(wordReverse("Banana is yellow"));

//FOR EACH EXAMPLE
// var numbers = [1, 2, 3];
// var ansArr = [];
//
// var myForEach = function(arr, fn){
//   fn(arr[0])
// }
//
// var doubleAndLog = function(num){
//   console.log(num * 2);
// }
//
// console.log(myForEach(numbers, doubleAndLog));
