var http = require('http');

//create a server object:
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('Hello World!!!' + '<br>'); //write a response to the client
    res.write(' Otro mensaje estándar'); //write a response to the client
    res.end(); //end the response
});

server.listen(8080); //the server object listens on port 8080