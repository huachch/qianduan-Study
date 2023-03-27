##  HTTP

HTTP (hypertext transport protocol) 协议【超文本传输协议】，协议详细规定了浏览器和万维网服务器之间相互通信的规则。

##  请求报文
重点是格式和参数
```
行    POST(请求类型)   /sie?query=XXX(URL)   HTTP/1.1(协议版本)   
头    Host: 
      Cookie: 
      Content-type:
      User-Agent: 
空行
体    (GET时为空，POST时可以不为空)
```

##  响应报文
```
行    HTTP/1.1(协议版本)  200(相应状态码)   OK(响应状态字符串)
头    Content-type:
      Content-length: 
      Content-encoding:
空行
体    <html>
        <head>
        </head>
        <body>
          <h1>HCC</h1>
        </body>
      </html>
```



















