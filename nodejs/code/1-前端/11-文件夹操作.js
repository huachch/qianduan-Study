// 1. 导入fs模块
const fs = require('fs')

/* // 2. 创建文件夹
fs.mkdir('./html',err=>{
  if(err){
    console.log('创建失败');
    return
  }
  console.log('创建成功');
}) */

/* // 2-2 递归创建
fs.mkdir('./a/b/c',{recursive:true},err=>{
  if(err){
    console.log('创建失败');
    return
  }
  console.log('创建成功');
}) */

/* // 2-3 文件夹读取
fs.readdir('./资料',(err,data)=>{
  if(err){
    console.log('读取失败');
    return
  }
  console.log(data);//[ 'data.txt', '灿灿2.mp4', '灿灿3.mp3', '灿灿_say to myself.m4a' ]
}) */

/* // 2-4 删除文件夹
fs.rmdir('./html',err => {
  if(err){
    console.log('删除失败');
    return
  }
  console.log('删除成功');
}) */

// 2-5 递归删除
fs.rm('./a',{recursive:true},err => {
  if(err){
    console.log('删除失败');
    return
  }
  console.log('删除成功');
})