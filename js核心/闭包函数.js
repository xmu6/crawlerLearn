//函数变量可以作为函数参数，也可以作为函数返回值
function a(){
    console.log("aaa");
}
function foo(x){
    x();
}
foo(a);
// 函数有函数参数或者函数返回值，那么这个函数称之为高阶函数

//闭包，利用函数开辟独立作用域
//闭包函数，利用了外部非全局变量，其依赖与闭包函数同生同死
counter = (function(){
    var n = 0;  // 依赖
    function c(){
        let ret = ++n;
        console.log(ret);
        return ret;
    }
    return c;
})();
counter();
counter();
counter();
counter();
counter();
