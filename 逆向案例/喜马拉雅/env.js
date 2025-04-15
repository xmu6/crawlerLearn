window = global;
navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
}
window.devicePixelRatio = 1;
window.requestAnimationFrame = function(){};
window.cancelAnimationFrame = function(){};
window.addEventListener = function(){};
window.xmrep = {
    "info": {
        "bId": 11,
        "deviceId": "d8a984df-6c03-4580-a0b8-7dc1ae396006",
        "deviceType": "browser",
        "sessionId": 1739372053980,
        "seq": 1739387452077
    },
    "name": "xmrep",
    "version": "2.4.15-alpha.2",
    "apm": {
        "playerMonitor": {
            "timeOrigin": 1739379410870
        }
    },
    "ubt": {},
    "ubtAuto": {},
    "share": {}
}
location = {
    "ancestorOrigins": {},
    "href": "https://passport.ximalaya.com/page/web/login?fromUri=https%3A%2F%2Fstudio.ximalaya.com",
    "origin": "https://passport.ximalaya.com",
    "protocol": "https:",
    "host": "passport.ximalaya.com",
    "hostname": "passport.ximalaya.com",
    "port": "",
    "pathname": "/page/web/login",
    "search": "?fromUri=https%3A%2F%2Fstudio.ximalaya.com",
    "hash": ""
}
document = {
    createElement: function(ele) {
        // console.log('createElement:::',ele)
        if (ele === 'canvas') {
            return canvas;
        }
        if (ele === 'div'){
            return div;
        }
    },
    getElementById(){},
    documentElement:{
        style:{
            fontSize:''
        }
    },
    body:{
        style:{
        }
    },
    addEventListener(){},
}
style = {
    fontSize:''
}

canvas = {
    toDataURL(ele) {
        console.log('toDataURL:::', ele)
        return ele
    }
}
div = {
    style:{},
    setAttribute(){}
}
sessionStorage = {
    "fromUri": "https%3A%2F%2Fstudio.ximalaya.com",
    "dimpa": "1739372053980",
    "cap_id": "xm_m7218qmg8g50ne",
    getItem( ) {
    }
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
//
// setProxyArr(["window", "document", "navigator",'canvas','div','documentElement','getElementById',]);