const fs = require('fs')
const { execFile } = require('child_process');

execFile('node', ['./fs学习/index.js'])
// fs.renameSync('./fs学习/新建文件夹', './fs学习/文件夹')
// 相对路径是以终端位置为参照物，可以使用__dirname来表示当前文件的绝对路径（到其父文件）