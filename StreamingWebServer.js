const http = require('http');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = '9000';

const mimes = {
  ".html" : "text/html",
  ".htm"  : "text/html",
  ".css"  : "text/css",
  ".js"   : "text/javascript",
  ".gif"  : "image/gif",
  ".jpg"  : "image/jpeg",
  ".pgn"  : "image/png"
}

const server = http.createServer(function (request, response) {
  const filepath = (request.url === '/') ? ('.index.html') : ('.' + req.url);
  const cosntentType = mimes[path.extname(filepath)];

  // Check if the file exists
  fs.exists(filepath, function(file_exists) {
    if (file_exists) {
      // Read and Server
      response.writeHead(200, {'Content-Type': cosntentType});
      const streamFile = fs.createReadStream(filepath).pipe(response);

      streamFile.on('error', function() {
        response.writeHead(500);
        response.end();
      })
    } else {
      response.writeHead(404);
      response.end("Sorry we could not find the file you requested !");
    }
  })

}).listen(port, host, function(){
  console.log('Server running at http://' + host + ':' + port)
})
