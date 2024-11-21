const http = require('http');
const fs = require('fs');

const ws = fs.createWriteStream('./log.txt');
const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8');
  // response.end('Hello World');
  ws.write(JSON.stringify(request.headers));
  response.end('drive');
})

server.listen(9000, () => {
  console.log('start your engine');
})