var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?id=7839805&APPID=d10ed7fa849100a3d43e443f9ba5b599', function (error, response, body) {
  var jsonBody = JSON.parse(body)
  console.log(jsonBody.main.temp);
});
