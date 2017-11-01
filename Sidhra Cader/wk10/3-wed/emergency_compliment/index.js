var express = require('express');
var app = express();
const PORT = 8888;

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/:name', function(request, response){
  var randomCompliment = Math.floor(Math.random() * compliments.length)
  var randomColor = Math.floor(Math.random() * colors.length)
  response.render('index', {name: request.params.name, compliment: compliments[randomCompliment], color: colors[randomColor]});
  // console.log("hello");
});

app.get('/:name/add', function(request, response){
  response.render('compliment');
})

app.listen(PORT);
