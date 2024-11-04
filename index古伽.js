const fs = require('fs')
const { execFile } = require('child_process');

execFile('node', ['./fs学习/index.js'])
// fs.renameSync('./fs学习/新建文件夹', './fs学习/文件夹')