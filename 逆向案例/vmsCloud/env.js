window = top = self = global;
window.addEventListener = function (ele) {
    // console.log('addEventListener:', ele)
}
navigator = {
    appName: 'Netscape'
};
document = {
    all: {
        "0":{},
        "1":{},
        "2":{},
    },
    baseURI: 'https://vms.tplinkcloud.com/#/vms/device',
}

// function setProxyArr(proxyObjArr) {
//     for (let i = 0; i < proxyObjArr.length; i++) {
//         const objName = proxyObjArr[i];
//         const handler = {
//             get(target, property, receiver) {
//                 console.log("方法:", "get  ", "对象:", objName, "  属性:", property, "  属性类型：", typeof property, ", 属性值：", target[property], ", 属性值类型：", typeof target[property]);
//                 return target[property];
//             },
//             set(target, property, value, receiver) {
//                 console.log("方法:", "set  ", "对象:", objName, "  属性:", property, "  属性类型：", typeof property, ", 属性值：", value, ", 属性值类型：", typeof target[property]);
//                 return Reflect.set(target, property, value, receiver);
//             }
//         };
//         // 检查并初始化对象
//         let targetObject = global[objName] || {};  // 在Node.js环境中使用global
//         global[objName] = new Proxy(targetObject, handler);  // 在Node.js环境中使用global
//     }
// }
//
// setProxyArr(["window", "document", "navigator", "script", "canvas", 'ctx','div',])