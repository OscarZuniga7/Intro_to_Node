var http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write(req.url);
  res.end();
});

server.listen(8080);