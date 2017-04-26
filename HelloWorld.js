const http = require('http');
const host = '127.0.0.1';
const port = '9000'

const server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type' : 'text/html'});
  response.end("<h1> Hello World !</h1>");
}).listen(port, host, function(){
  console.log('Server running at http://' + host + ':' + port)
})
