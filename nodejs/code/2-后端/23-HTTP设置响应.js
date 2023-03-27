// 导入http模块
const http = require('http')

// 创建服务对象
const server = http.createServer((request,response) => {
  response.end('practise')
})

// 监听端口 启动服务
server.listen(9005,()=>{
  console.log('服务已启动。。。端口9000监听中。。。');
})