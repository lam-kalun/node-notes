const fs = require('fs');
const mp4File = fs.readFileSync(__dirname + '/你是地球.mp4');
fs.writeFileSync(__dirname + '/你是同步地球.mp4', mp4File);
const rs = fs.createReadStream(__dirname + '/你是地球.mp4');
const ws = fs.createWriteStream(__dirname + '/你是流地球.mp4');
rs.pipe(ws);
