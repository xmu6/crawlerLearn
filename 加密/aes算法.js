const cryptoJS = require("crypto-js");
const data = 'hello world';
var key = cryptoJS.enc.Utf8.parse("1234567890123456");
var iv = cryptoJS.enc.Utf8.parse("1234567890abcdef");
//进行AES-128加密，使用CBC模式和PKCS7填充
var encrypted = cryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: cryptoJS.mode.CBC,
    padding: cryptoJS.pad.Pkcs7
});
console.log(encrypted.toString());

// 解密
var decrypted = cryptoJS.AES.decrypt(encrypted.toString(), key, {
    iv: iv,
    mode: cryptoJS.mode.CBC,
    padding: cryptoJS.pad.Pkcs7
});
console.log(decrypted.toString(cryptoJS.enc.Utf8));
