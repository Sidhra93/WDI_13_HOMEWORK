// var origin = prompt("Origin:");
// var dest = prompt("Destination:");

var origin = "Southern Cross";
var dest = "South Yarra";
var route;
var outRoute;

var trainLines = [
  {
    name: "Alamein",
    stops: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
  },
  {
    name: "Glen Waverley",
    stops: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
  },
  {
    name: "Sandringham",
    stops: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
  }
];

for (var i = 0; i < trainLines.length; i++) {
  for (var j = 0; j  < trainLines[i].stops.length; j++) {
    if (origin === trainLines[i].stops[j]) {
      console.log(trainLines[i].name + " Line: \n \n");
      route = trainLines[i].stops.slice(j, trainLines[i].stops.indexOf(dest) + 1);
    }
  }
}

console.log((route.join()).replace(/,/g, " -----> "));
console.log("\n" + route.length + " stops total");
