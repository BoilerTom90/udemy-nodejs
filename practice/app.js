var http = require('http');

http.createServer(function (req, res) {

   console.log(JSON.stringify(req.headers));
   // we're here when a request is received
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
