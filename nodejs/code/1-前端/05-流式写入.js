// 观书有感.txt

// 1. 导入fs
const fs = require('fs')

// 2. 创建写入流对象
const ws = fs.createWriteStream('./观书有感.txt')

// 3. write
ws.write('dhjfhjkhdlkfl\r\n')
ws.write('dhjfhjkhdlkfl\r\n')
ws.write('dhjfhjkhdlkfl\r\n')
ws.write('dhjfhjkhdlkfl\r\n')
ws.write('dhjfhjkhdlkfl\r\n')

// 4. 关闭通道
ws.close()


// 流式写入适合大文件或者频繁写入