// es6
var f = v => v;
// 等价于
var f = function (v) {
    return v;
}


// 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
var f = () => 5;
// 等价于
var f = function () {
    return 5
};

var sum = (num1, num2) => num1 + num2;
// 等价于
var sum = function (num1, num2) {
    return num1 + num2;
}


// map函数
var arr = [1, 2, 3];
arr.map(function (x) {
    return x * x;
})
// 等价于
var res = arr.map(x => x * x);
console.log(res)


// filter函数
var arr = [1, 2, 3, 4, 5];
arr.filter(function (x) {
    return x % 2 === 0;
})
// 等价于
var res = arr.filter(x => x % 2 === 0);
console.log(res)
