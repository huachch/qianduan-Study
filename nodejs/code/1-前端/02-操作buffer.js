// buffer 与字符串的转换
// let buf_4 = Buffer.from([111,112,113,114,115,116,117,118,119])
// console.log(buf_4.toString());//utf-8

//[]
// let buf = Buffer.from('hello')
// console.log(buf[0].toString(2));//转换进制：1101000
// console.log(buf);
// buf[0] = 95
// console.log(buf);
// console.log(buf.toString());

//溢出
// let buf = Buffer.from('hello')
// buf[0] = 361 //最大255,舍弃高位数字
// console.log(buf);

//中文
let buf = Buffer.from('你好')
console.log(buf);
