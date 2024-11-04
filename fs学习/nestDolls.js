const fs = require('fs');
const { execFile } = require('child_process');
const ws = fs.createWriteStream(__dirname + '/视频复制/nestDolls.js');
ws.write("const fs = require('fs');\n");
ws.write("const mp4File = fs.readFileSync(__dirname + '/你是地球.mp4');\n");
ws.write("fs.writeFileSync(__dirname + '/你是同步地球.mp4', mp4File);\n");
ws.write("const rs = fs.createReadStream(__dirname + '/你是地球.mp4');\n");
ws.write("const ws = fs.createWriteStream(__dirname + '/你是流地球.mp4');\n");
ws.write("rs.pipe(ws);\n");
ws.end();
ws.on('finish', () => {
 execFile('node', [__dirname + '/视频复制/nestDolls.js'])
});
