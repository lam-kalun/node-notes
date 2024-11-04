const fs = require('fs');
const { resolve } = require('path');

fs.mkdirSync(resolve(__dirname, '你是文件夹1'));
fs.mkdirSync(resolve(__dirname, 'a/b/c'), { recursive: true });

// fs.rmdirSync(resolve(__dirname, '你是文件夹1'))
// fs.rm(resolve(__dirname, 'a'), { recursive: true })