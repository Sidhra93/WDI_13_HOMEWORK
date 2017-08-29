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
