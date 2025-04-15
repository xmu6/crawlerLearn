//一，对函数hook
function add(a, b){
    console.log("add is playing");
    return a + b;
}

//原函数进行保存
var _add = add;
//对add函数进行hook操作
add = function(a, b){
    console.log("原函数调用前");
    let result = _add(a, b);
    console.log("原函数调用后");
}

add(1,2)
console.log("------------------------")
_add(1,2)


//二、对属性hook
//1、创建一个对象
let user = {
    "name": "zhangsan",
}
//2、保存原属性
let _name = user.name;
//3、对属性进行hook操作
Object.defineProperty(user, "name", {
    get(){
        console.log("正在获取属性值");
        return _name;
    },
    set(value){
        console.log("正在设置属性值", value);
        _name = value;
    }
})
console.log('------------------------')
console.log(user.name)
user.name = "lisi"


console.log("------------------------")
//避免浏览器hook检测
atob = function(str){
    console.log("正在执行atob方法，参数：str");
    let result = atob(str);
    console.log("正在执行atob方法，返回值：", result);
    return result;
};
//重写atob函数的tostring方法
atob.toString = function(){
    return 'function atob() { [native code] }'
}
console.log(atob.toString())

