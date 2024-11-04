const { execFile } = require('child_process');
const { resolve } = require('path')

// 视频复制
execFile('node', [resolve(__dirname, '视频复制/index.js')])


// 新建文件夹
execFile('node', [resolve(__dirname, '文件夹/index.js')])
