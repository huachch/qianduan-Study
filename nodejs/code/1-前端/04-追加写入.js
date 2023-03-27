// 1. 引入fs模块
const fs = require('fs')

// fs.appendFile('./座右铭.txt','好的就学，不好的别学',err => {
//   if(err){
//     console.log('追加写入失败');
//     return
//   }
//   console.log('追加写入成功');
// })

// fs.appendFileSync('./座右铭.txt','\r\n记住啦')


// writeFile 实现追加写入
fs.writeFile('./座右铭.txt', 'love love', { flag: 'a' }, err => {
  if (err) {
    console.log('追加写入失败');
    return
  }
  console.log('追加写入成功');
})