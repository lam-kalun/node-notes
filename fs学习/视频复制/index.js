const fs = require('fs');
const process = require('process');
const { resolve } = require('path')

const mp4File = fs.readFileSync(resolve(__dirname, '你是地球.mp4'));
fs.writeFileSync(resolve(__dirname, './你是同步地球.mp4'), mp4File);
// console.log(process.memoryUsage());

const rs = fs.createReadStream(resolve(__dirname, '你是地球.mp4'));
const ws = fs.createWriteStream(resolve(__dirname, '你是流地球.mp4'));
// rs.pipe(ws);
rs.on('data', chunk => {
  ws.write(chunk)
});
rs.on('end', () => {
  console.log(process.memoryUsage());
});

// 入参时就执行了process.memoryUsage，所以不正确
// rs.on('end', console.log.bind(console, process.memoryUsage()));

