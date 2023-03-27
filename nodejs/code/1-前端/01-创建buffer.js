// 1. alloc
let buf = Buffer.alloc(10);
// console.log(buf);

// 2. allocUnsafe
let buf_2 = Buffer.allocUnsafe(10);
// console.log(buf_2);

// 3. from
let buf_3 = Buffer.from('hello')//转十六进制
let buf_4 = Buffer.from([11,12,13,14,15,16,17,18,19])
console.log(buf_4);