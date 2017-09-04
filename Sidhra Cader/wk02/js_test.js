//JS Variables

var captain = "Jack";
var phrase = "Oh " + captain + ", my " + captain + "!" // Oh Jack, my Jack!

//JS conditionals

var souls = 3;
var lifeRafts = 2;

if (souls >= lifeRafts) {
  console.log("SOS!");
}

//Data Structures - JS Array

var weekend = ["Saturday"];
weekend.push("Sunday"); // weekend = ["Saturday", "Sunday"]
weekend.unshift("Friday"); // weekend = [Friday, "Saturday", "Sunday"]
var day = weekend[1]; // day = "Saturday"
weekend.shift(); // weekend = ["Saturday", "Sunday"]

//Data Sturctures - JS Objects

var brain = {
  energyLevel: 10
}

var energy = brain.energyLevel; // energy = 10
brain.dream = "electric sheep";

//JS Functions

var rectangleArea = function(length, width){
  var area = length * width;
  return area;
}

var area = rectangleArea(3, 4); // area = 12

// Answer to 3
// the global variable is being passed into the function which is assigned to the local variable arr. In other words arr = fruits. Therefore any change occuring to arr will in turn occur in fruits.
