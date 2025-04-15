var functions = require('./functions')
res1 = functions.add(1, 2);
console.log(res1);
function add1(){
    console.log(arguments)  //JS在每一个函数的内部内置一个对象：arguments，实际参数的数组
    var sum = 0;
    for(const item of arguments){
        sum += item;
    }
    return sum;
}
let s = add1(1,2,3,4,5,6,7,8,9,10);
console.log(s);