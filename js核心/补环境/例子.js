/*
补环境：利用两个执行环境node.js和浏览器构造的不同
node.js：ECMA 网络接口 文件操作 数据库接口
浏览器：  ECMA DOM BOM

定位的JS代码（加密值的逻辑代码中）有可能两种情况需要补环境：
1. 正常的前端初始化或数据准备
2. 前端环境的校验
    -- 检验是否是浏览器环境
    -- 检验是否是非浏览器环境



window对象：
    - 定时器
        setInterval(fn,毫秒)：指定周期重复执行的函数
        clearInterval(定时器id)：清除定时器
        setTimeout(fn,毫秒)：到了指定毫秒后，自动执行功能代码
        clearTimeout(定时器id)
    - 对话框
        alert()：警告框
        confirm()：确认框
        prompt()：输入框
    - 属性
        window.name：当前窗口的名字
        self：当前窗口的引用
    - 成员对象
        document对象
        navigator对象
        location对象
        screen对象
        history对象
document对象：
    - 集合
        anchors：描述对象数组
        images：图片对象数组
        links：链接对象数组
        forms：表单对象数组
        all：提供对文档中所有HTML元素的访问
    - 属性
      ☆ cookie：设置或获取与当前文档有关的所有cookie ☆
        domain：返回当前文档的域名
        refer：返回当前文档的文档URL
        title：返回当前文档的标题
    - 方法
        open：打开一个新的文档并擦除旧的文档
        close：关闭当前文档
        write：向当前文档追加写入内容
      ☆ document.createElement(<Tag>)：用指定标签类型创建一个新的element对象 ☆
        document.getElementById(<id>)：获得指定ID值的对象
        document.getElementsByClassName：获得指定class属性的对象
        document.getElementsByTagName：返回带有指定标签名的对象集合
    - 成员对象
        location对象：描述当前文档的URL
navigator对象、location对象、screen对象、history对象
Element对象：
      ☆ element.getAttribute()：获得指定属性名的属性值 ☆
      ☆ element.toString()：返回元素的标签名 ☆
*/
window = global
window.addEventListener = function () {
};

navigator = {
    toString: function () {
        return '[object Navigator]'
    },
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
};

kw = {
    getAttribute() {}
};
ctx = {
    fillStyle:{},
    fillRect(){}
};
canvas = {
    getContext(){
        return ctx
    }
};
document = {
    getElementById: function (ele) {
        // console.log(ele)
        if (ele === 'kw') {
            return kw  // 一定要return出来，否则监控不到
        }
    },
    createElement(ele){
        // console.log(ele)
        if (ele === 'canvas') {
            return canvas
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
// 注意：补环境的内容要写在代理数组的上面！！！   注意补了之后添加到数组里面！！！
setProxyArr(['window', 'document', 'navigator', 'location', 'screen', 'history', 'Element', 'kw', 'canvas', 'ctx'])


function get_sign() {
    if (navigator.toString() === '[object Navigator]') {
        window.addEventListener('test')
        let kw = document.getElementById('kw')
        let _class = kw.getAttribute('class')
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        ctx.fillStyle = 'green'
        ctx.fillRect(0, 0, 100, 100)
        let navLength = navigator.userAgent.length
        return 'u82d1660a'.toUpperCase() + navLength
    } else {
        return 'dafsdf'
    }
};
console.log(get_sign())

