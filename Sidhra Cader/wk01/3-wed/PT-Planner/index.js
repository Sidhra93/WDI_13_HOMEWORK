// var origin = prompt("Origin:");
// var dest = prompt("Destination:");

var origin = "Windsor";
var dest = "Richmond";
var route;
var reverseLine =[];
var numberOfStops;

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
  numberOfStops = trainLines[i].stops.length;
  for (var j = 0; j  < numberOfStops; j++) {
    if (origin === trainLines[i].stops[j]) {
      if (trainLines[i].stops.includes(dest)) {
        if (trainLines[i].stops.indexOf(origin) < trainLines[i].stops.indexOf(dest)) {
          console.log(trainLines[i].name + " Line: \n \n");
          route = trainLines[i].stops.slice(j, trainLines[i].stops.indexOf(dest) + 1);
          console.log((route.join()).replace(/,/g, " -----> "));
          console.log("\n" + trainLines[i].stops.indexOf(dest) + " stops total");
        } else if (trainLines[i].stops.indexOf(origin) > trainLines[i].stops.indexOf(dest)) {
          reverseLine = trainLines[i].stops.reverse();
          console.log(trainLines[i].name + " Line: \n \n");
          route = reverseLine.slice(reverseLine.indexOf(origin), reverseLine.indexOf(dest) + 1);
          console.log((route.join(" ----> ")));
          console.log("\n" + (route.indexOf(dest)) + " stops total");
        }
      }
    }
  }
}
