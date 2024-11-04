const fs = require('fs');
fs.writeFile('./蒙面超人', '终极救助', error => error?console.log(error):console.log('成功'))