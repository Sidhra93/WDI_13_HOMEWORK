var http = require('http');
var fs = require('fs');

var app = function(request, response){
  response.write("hello world");
  fs.readFile('Australian_Post_Codes_Lat_Lon.csv', 'utf-8', function(err, data){
    response.write(data.toString());
  })
  response.end();
}

var server = http.createServer(app);
server.listen(8888);
