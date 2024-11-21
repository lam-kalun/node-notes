const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1');
  const filePath = __dirname + '/yimoxen' + url.pathname;
  console.log(url.pathname, filePath);
  
  
  const fileData = fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.end(data);
  })
  // res.end('89')
})

server.listen(9000, () => {
  console.log('wo lei can shang');
})