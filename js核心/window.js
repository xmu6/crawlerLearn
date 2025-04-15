//定义全局变量
// window.a = 10;
// console.log(a)
//window对象实际上表示浏览器的窗口。浏览器窗口只有浏览器有。在pycharm中直接使用会报错
//window对象是专属于浏览器环境下的一个内置对象





//call apply外部函数关联对象内部的函数
function People(name,age){
    this.name = name;
    this.age = age;
    this.say = function(){
        console.log(this.name + " " + this.age);
    }
}

p1 = new People("张三",18);

//外部函数
function eat(food){
    console.log(this.name + '吃' + food);
}
eat.call(p1,"苹果");
eat.apply(p1,["苹果"]);//apply的参数是数组







//箭头函数
var fn = function (name){
    console.log("hello world" + name);
}

var fn2 = (name) => {console.log("hello world" + name);}

fn('dff')
fn2('dfd')

var f = v => v*v;
//如果函数体只有一个表达式，并且需要返回这个表达式的值，那么可以省略大括号{}和return关键字
var f2 = function (v){
    return v*v;
}
