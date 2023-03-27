// 1. 导入fs模块
const fs = require('fs')

// 2. stat方法
fs.stat('./资料/灿灿3.mp3',(err,data) =>{
  if(err){
    console.log('操作失败');
    return
  }
  // console.log(data);
  // console.log(data.isFile());//查看是否是文件
  console.log(data.isDirectory());//查看是否是文件夹
})