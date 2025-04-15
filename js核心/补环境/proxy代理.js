/*
// 版本1
var yuan = {
    name: "yuan",
    age: 22
}

var rain = {
    name: "rain",
    age: 32
}


yuan = new Proxy(yuan, {
    get(target, p, receiver) {
        console.log("查询操作")
        console.log("target:", target)
        console.log("p:", p)
        return Reflect.get(target, p)
    },
    set(target, p, value, receiver) {
        console.log("设置操作")
        console.log("target:", target)
        console.log("p:", p)
        console.log("value:", value)

        Reflect.set(target, p, value);
    }
})

rain = new Proxy(rain, {
    get(target, p, receiver) {
        console.log("查询操作")
        console.log("target:", target)
        console.log("p:", p)
        return Reflect.get(target, p)
    },
    set(target, p, value, receiver) {
        console.log("设置操作")
        console.log("target:", target)
        console.log("p:", p)
        console.log("value:", value)

        Reflect.set(target, p, value);
    }
})

// 黑匣子中的逻辑代码
let a = yuan.name
let b = yuan.age
yuan.age = 100
yuan.name = "alvin"

let c  =rain.name*/



// 版本2
yuan = {
    name: "yuan",
    age: 22
}

rain = {
    name: "rain",
    age: 32
};

// 做一个代理数组
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


setProxyArr(["yuan", "rain"]);

// 黑匣子中的逻辑代码
let a = yuan.name;
let b = yuan.age;
yuan.age = 100;
yuan.name = "alvin";

let c  =rain.name