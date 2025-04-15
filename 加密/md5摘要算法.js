const cryptoJS = require('crypto-js');
const data = '123456'
// 生成md5摘要
const md5 = cryptoJS.MD5(data).toString();
console.log(md5);
