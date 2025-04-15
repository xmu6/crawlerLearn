window = top = self = global;
navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
}
n = {
    setAttribute(){}
}

location = {
    "ancestorOrigins": {},
    "href": "https://tpass.shanxi.chinatax.gov.cn:8443/#/forget?client_id=sa67ddd29sc94cga9f96s7da2772s6d7&identity=person",
    "origin": "https://tpass.shanxi.chinatax.gov.cn:8443",
    "protocol": "https:",
    "host": "tpass.shanxi.chinatax.gov.cn:8443",
    "hostname": "tpass.shanxi.chinatax.gov.cn",
    "port": "8443",
    "pathname": "/",
    "search": "",
    "hash": "#/forget?client_id=sa67ddd29sc94cga9f96s7da2772s6d7&identity=person"
}

localStorage = {
    "ded": "pgvLMGeilv6w1XduYu4N6ogPkx4bYmEP",
    "natureuuid": "1d83b2cf8a2846a6a9bfc8bdd84cc61d",
    "idSel": "0",
    "clientId": "sa67ddd29sc94cga9f96s7da2772s6d7",
    "naturepublicKey": "047D699A983781D5FBBCBE0025DF53AA2E225CF2D1F3EDD34F3DA202CEFE8BA7C47832FFC1BE3890C9298ED8F7545D283C2B8216500BCC63E9AA818414900CCA47",
    "timestamp": "1743256774862",
    getItem(key) {
    }
}
window.addEventListener = function (){}

function setProxyArr(proxyObjArr) {
    for (let i = 0; i < proxyObjArr.length; i++) {
        const objName = proxyObjArr[i];
        const handler = {
            get(target, property, receiver) {
                console.log("方法:", "get  ", "对象:", objName, "  属性:", property, "  属性类型：", typeof property, ", 属性值：", target[property], ", 属性值类型：", typeof target[property]);
                return target[property];
            },
            set(target, property, value, receiver) {
                console.log("方法:", "set  ", "对象:", objName, "  属性:", property, "  属性类型：", typeof property, ", 属性值：", value, ", 属性值类型：", typeof target[property]);
                return Reflect.set(target, property, value, receiver);
            }
        };
        // 检查并初始化对象
        let targetObject = global[objName] || {};  // 在Node.js环境中使用global
        global[objName] = new Proxy(targetObject, handler);  // 在Node.js环境中使用global
    }
}
//
// setProxyArr(["window", "document", "navigator", "script", "canvas", 'ctx','div','Event','n'])


