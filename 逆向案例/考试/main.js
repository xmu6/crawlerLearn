require("./env.js")
require("./loader.js")
require("./mod1")
require("./mod2")

c = window.loader("0b77")
g = Object(c["b"])()


function getFormattedDateTime(a) {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}


function getSignature() {
    P = g.substring(0, 8) + "dt!Ppb9t"
    p = Object(c["d"])('{}', Object(c["i"])(P))
    sig = Object(c["a"])("0" + "2" + p + getFormattedDateTime() + "HMacSHA256", g)
    return sig
}

console.log("::" + getFormattedDateTime() + "::")
console.log("。。" + getSignature() + "。。")






