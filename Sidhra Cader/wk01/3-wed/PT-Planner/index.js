// var origin = prompt("Origin:");
// var dest = prompt("Destination:");

var origin = "Windsor";
var dest = "Hawthorn";
var route;
var reverseLine =[];
var numberOfStops;
var intersection = 'Richmond';

var originLine;
var destinationLine;
var sameLine = false;

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
  if(trainLines[i].stops.includes(dest) && trainLines[i].stops.includes(origin))
  {
    console.log(trainLines[i].name + " Line: \n \n");
    var originIndex = trainLines[i].stops.indexOf(origin);
    var destIndex = trainLines[i].stops.indexOf(dest);
    route = (originIndex > destIndex) ? trainLines[i].stops.slice(destIndex,originIndex+1).reverse() : trainLines[i].stops.slice(originIndex,destIndex+1);
    console.log((route.join()).replace(/,/g, " -----> "));
    sameLine = true;
    break;
  }
  else if(trainLines[i].stops.includes(dest)){
    destinationLine = trainLines[i];
  }
  else if(trainLines[i].stops.includes(origin)){
    originLine = trainLines[i];
  }
}
if(!sameLine){
  // Render first line
  console.log(originLine.name + " Line: \n \n");
  var originIndex = originLine.stops.indexOf(origin);
  var destIndex = originLine.stops.indexOf(intersection);
  route = (originIndex > destIndex) ? originLine.stops.slice(destIndex,originIndex+1).reverse() : originLine.stops.slice(originIndex,destIndex+1);
  console.log((route.join()).replace(/,/g, " -----> "));

  // Render second line
  console.log(destinationLine.name + " Line: \n \n");
  var originIndex = destinationLine.stops.indexOf(intersection);
  var destIndex = destinationLine.stops.indexOf(dest);
  route = (originIndex > destIndex) ? destinationLine.stops.slice(destIndex,originIndex+1).reverse() : destinationLine.stops.slice(originIndex,destIndex+1);
  console.log((route.join()).replace(/,/g, " -----> "));




}


/*  numberOfStops = trainLines[i].stops.length;

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
*/
