window = globalThis;
window.requestAnimationFrame = function(){};
XMLHttpRequest = function(){
    console.log('xml')
}
navigator = {
    'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    storage: {},
    permissions: {},
    platform: 'Win32',
};
window.onwheelx = {
    "_Ax": "0X21"
}
window._sdkGlueVersionMap = {
    "sdkGlueVersion": "1.0.0.64-fix.01",
    "bdmsVersion": "1.0.1.19-fix.01",
    "captchaVersion": "4.0.10"
}
window.outerWidth = 1560;
window.outerHeight = 900;
window.innerHeight = 900;
window.innerWidth = 1560;
window.addEventListener = function (ele) {
        // console.log('addEventListener:::',ele)
        if (ele === 'visibilitychange'){
            return ele;
        }
        if (ele === 'mousemove'){
            return ele;
        }
        if (ele === 'touchmove'){
            return ele;
        }
        if (ele === 'mousedown'){
            return ele;
        }
        if (ele === 'touchstart'){
            return ele;
        }
        if (ele === 'mouseup'){
            return ele;
        }
        if (ele === 'mouseout'){
            return ele;
        }
        if (ele === 'mouseover'){
            return ele;
        }
        if (ele === 'touchend'){
            return ele;
        }
        if (ele === 'keydown'){
            return ele;
        }
    }
screen = {
    availHeight: 900,
    availWidth: 1560,
    width: 1560,
    height: 900,
    colorDepth: 24,
    pixelDepth: 24,
    orientation: {
        type: 'landscape-primary',
        angle: 0
    }
}
location = {}
span = {}
classList = {}
body = {}
document = {
    all: {},
    createElement: function (ele){
        if (ele === 'span') {
            return ele;
        }
        if (ele === 'classList') {
            return ele;
        }
        console.log('createElement:::',ele)
    },
    documentElement: {},
    createEvent: function (){},
    body: {
        clientWidth: 1471
    },
    addEventListener(ele) {
        // console.log('addEventListener:::',ele)
        if (ele === 'visibilitychange'){
            return ele;
        }
        if (ele === 'mousemove'){
            return ele;
        }
        if (ele === 'touchmove'){
            return ele;
        }
        if (ele === 'mousedown'){
            return ele;
        }
        if (ele === 'touchstart'){
            return ele;
        }
        if (ele === 'mouseup'){
            return ele;
        }
        if (ele === 'mouseout'){
            return ele;
        }
        if (ele === 'mouseover'){
            return ele;
        }
        if (ele === 'touchend'){
            return ele;
        }
        if (ele === 'keydown'){
            return ele;
        }
    }
}
localStorage = {
    getItem: function(ele){
        // console.log('localStorage:::',ele)
        if (ele === 'xmst') {
            return '1Yndy9hUz02_13ouxY6L_Z2zk4SczzHmxv5vhdqzXSH1Talb_bXbv_UOBxtoQIvZFkbGWu2dGfsfwWTblAxsxCE2kI3c6LTSt26XGIV8H5VrhDdKsjWP2XPbAlo3IiywLjEr4WmKtr-2kMWxv476wLnBo0l84M5_A1jIOWm_L1wT';
        }
    }
}




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

setProxyArr(["window", "document", "navigator", "script", "canvas", 'ctx','div','XMLHttpRequest','span','classList','localStorage', 'screen', 'body'])
