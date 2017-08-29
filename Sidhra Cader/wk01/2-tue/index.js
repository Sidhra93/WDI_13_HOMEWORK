var name = prompt("Enter Your Name: ");
console.log("Hello " + name);

var menuChoice = prompt("Menu Tonight: Steak, Fruit Salad, Tofurkey, Pork Chops." + "\n" + "What's your choice?").toLowerCase();

if (menuChoice === "steak" || menuChoice === "pork Chops") {
  alert("Vegans beware!");
} else if (menuChoice === "fruit salad" || menuChoice === "tofurkey"){
  alert("This cuisine is vegan friendly");
} else {
  alert("Not in the menu");
}

for (var num = 1; num <= 20; num++) {
  if (num % 2 == 0) {
    console.log(num + " is Even");
  }else {
    console.log(num + " is Odd");
  }
}

for (var num2 = 1; num2 <= 10; num2++) {
  console.log(num2 + " * 9 = " + num2 * 9);
}

var colors = ["Pink", "Purple", "Black", "Blue", "Yellow"];
for (var i = 0; i < colors.length; i++) {
  console.log("My #" + (i + 1) + " choice is " + colors[i]);
}
