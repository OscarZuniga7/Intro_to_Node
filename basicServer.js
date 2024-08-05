const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  let filePath = '';
  let contentType = 'text/html';

  if (url === '/' || url === '/index') {
    filePath = path.join(__dirname, 'index.html');
  } else if (url === '/summer') {
    filePath = path.join(__dirname, 'summer.html');
  } else if (url === '/winter') {
    filePath = path.join(__dirname, 'winter.html');
  } else if (url.startsWith('/images/')) {
    filePath = path.join(__dirname, url);
    contentType = 'image/jpeg';
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
