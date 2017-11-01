var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?id=7839805&APPID=d10ed7fa849100a3d43e443f9ba5b599&units=metric', function (error, response, body) {
  var jsonBody = JSON.parse(body); // response comes back as string so you have to convert to JSON to be able to access values
  console.log(jsonBody.main.temp);
});
