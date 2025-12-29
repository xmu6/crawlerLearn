window = global;
// delete global;
__process =  process;
delete process;
window.rawWindow = {}
window.crypto = {}
head = {
    appendChild() {
    },
};
location = {
    "ancestorOrigins": {},
    "href": "https://search.jd.com/Search?keyword=%E6%89%8B%E6%9C%BA&pvid=9d9a6ed30e604990b4884a648dacf2a4&isList=0&page=9&s=236&click=0&log_id=1737987736552.6301",
    "origin": "https://search.jd.com",
    "protocol": "https:",
    "host": "search.jd.com",
    "hostname": "search.jd.com",
    "port": "",
    "pathname": "/Search",
    "search": "?keyword=%E6%89%8B%E6%9C%BA&pvid=9d9a6ed30e604990b4884a648dacf2a4&isList=0&page=9&s=236&click=0&log_id=1737987736552.6301",
    "hash": ""
}
_all = {
    "0":{},
    "1":{},
    "2":{},
}
document = {
    all: _all,
    createElement(ele) {
        if (ele === 'canvas') {
            return canvas
        }
        if (ele === 'script') {
            return script
        }
    },
    cookie: '.....',
    createEvent() {
    },
    body:{},
    documentElement:{},
    querySelector(){},
    getElementsByTagName(ele){
        // console.log('getElementsByTagName',ele)
        if(ele === 'head'){
            return [head]
        }
    },
    head: {
        childElementCount:43
    }
};
localStorage = {...}
script = {
    readyState: 'complete',
    type: '',
    src: '',
    onerror() {
    }
};

ctx = {
    fillStyle:{},
    fillRect() {},
    arc(){},
    stroke(){},
    fillText(){},
}
canvas = {
    getContext() {
        return ctx
    },
    toDataURL(){},
};

navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    webdriver: false,
    platform: "Win32",
    hardwareConcurrency: 8
};


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

setProxyArr(["window", "document", "navigator", "script", "canvas", 'ctx', 'head',])