var http = require('http');
var examples = require('./examples');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  // Concatenar todos los mensajes
  let responseMessage = examples.exampleVar() + examples.exampleLet() + examples.exampleConst();
  responseMessage += 'Fecha y hora actual: ' + examples.myDateTime() + '<br>';
  res.end(responseMessage);
});

server.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
