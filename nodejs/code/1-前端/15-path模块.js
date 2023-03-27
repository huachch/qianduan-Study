//
const fs = require('fs')
const path = require('path')

//写入文件
// fs.writeFileSync(__dirname + './index.html-undefined','love')
// console.log(__dirname + './index.html-undefined');//F:\vs\nodejs\code./index.html-undefined

// resolve 解决
// console.log(path.resolve(__dirname , './index.html-undefined'));
// console.log(path.resolve(__dirname , 'index.html-undefined'));
 
// sep 分隔符
// console.log(path.sep);  //windows  \  Linux  /

// parse 方法
// console.log(__filename); // 文件的绝对路径
let str = 'F:\\vs\\nodejs\\code\\15-path模块.js'
// console.log(path.parse(str));

// basename
// console.log(path.basename(str));// 获取文件名

// dirname
// console.log(path.dirname(str));// 文件夹路径

// extname
console.log(path.extname(str));// 文件扩展名