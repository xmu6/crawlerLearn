window = top = self = global;
location  ={...};  // 控制台复制
localStorage = {...} // 控制台复制
document = {
    createElement(ele){
        if (ele === 'canvas') {
            return canvas
        }
        if (ele === 'script') {
            return script
        }
        if (ele === 'div'){
            return div
        }
    },
    getElementsByTagName(ele){
        if(ele === 'head'){
            return [head]
        }
    },
    cookie: '...',
    createEvent(){},
    querySelector(){},
    body: {},
    documentElement: {},
};
div = {};
script = {
    readyState: 'complete',
    type: '',
    src: '',
    onerror(){},
};
canvas = {
    getContext() {
        return ctx
    },
    toDataURL(){},
};
ctx = {
    fillStyle:{},
    fillRect() {},
    arc(){},
    stroke(){},
    fillText(){},
};
navigator = {
    appCodeName: '...',
    appName: '...',
    appVersion: '...',
    platform: 'Win32',
    userAgent: '...',
    webdriver: false,
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

setProxyArr(["window", "document", "navigator", "script", "canvas", 'ctx','div',])


// 方式 2
function getEnv(proxy_array) {
        for (var i = 0; i < proxy_array.length; i++) {
            handler = `{\n
            get: function(target, property, receiver) {\n
                   console.log('方法：get','    对象：${proxy_array[i]}','    属性：',property,'    属性类型：',typeof property,'    属性值类型：',typeof target[property]);
                   return target[property];
            },
            set: function(target, property, value, receiver){\n
                    console.log('方法：set','    对象：${proxy_array[i]}','    属性：',property,'    属性类型：',typeof property,'    属性值类型：',typeof target[property]);
                    return Reflect.set(...arguments);
            }
        }`
            eval(`
                try {
                    ${proxy_array[i]};
                    ${proxy_array[i]} = new Proxy(${proxy_array[i]}, ${handler});
                } catch (e) {
                    ${proxy_array[i]} = {};
                    ${proxy_array[i]} = new Proxy(${proxy_array[i]}, ${handler});
                }
            `)
        }
    }

proxy_array = ['window', 'document', 'location', 'navigator', 'history', 'script', '_head', 'meta', 'base']
getEnv(proxy_array)
