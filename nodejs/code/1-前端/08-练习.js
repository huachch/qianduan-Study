// 需求:复制[资料]文件夹下的[灿灿.mp4]

const fs = require('fs')

/* // 方式一 readFile
// 读取文件内容
let data = fs.readFileSync('./资料/灿灿_say to myself.m4a');
// 写入文件
fs.writeFileSync('./资料/灿灿2.mp4',data) */

/* // 方式二 流式操作
// 创建读取流对象
const rs = fs.createReadStream('./资料/灿灿_say to myself.m4a')
// 创建写入流对象
const ws = fs.createWriteStream('./资料/灿灿3.mp3')
//绑定data事件
rs.on('data',chunk => {
  ws.write(chunk)
}) */

// rs.pipe(ws)