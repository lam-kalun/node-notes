const fs = require('fs');
const { execFile } = require('child_process');

// 套娃实现自动写入全部代码
const ws = fs.createWriteStream('./fs学习/nestDolls.js');
ws.write("const fs = require('fs');\n");
ws.write("const { execFile } = require('child_process');\n");
ws.write("const ws = fs.createWriteStream(__dirname + '/视频复制/nestDolls.js');\n");
ws.write("ws.write(\"const fs = require('fs');\\n\");\n");
ws.write("ws.write(\"const mp4File = fs.readFileSync(__dirname + '/你是地球.mp4');\\n\");\n");
ws.write("ws.write(\"fs.writeFileSync(__dirname + '/你是同步地球.mp4', mp4File);\\n\");\n");
ws.write("ws.write(\"const rs = fs.createReadStream(__dirname + '/你是地球.mp4');\\n\");\n");
ws.write("ws.write(\"const ws = fs.createWriteStream(__dirname + '/你是流地球.mp4');\\n\");\n");
ws.write("ws.write(\"rs.pipe(ws);\\n\");\n");
ws.write("ws.end();\n");
ws.write("ws.on('finish', () => {\n execFile('node', [__dirname + '/视频复制/nestDolls.js'])\n});\n");
ws.end();
ws.on('finish', () => {
  execFile('node', ['./fs学习/nestDolls.js'])
});

// 注意