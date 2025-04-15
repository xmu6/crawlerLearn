let foo = function (){
    console.log('foo');
}
foo();
//此写法不在编译阶段执行，对顺序有要求

//匿名函数自执行，执行一次后从内存中回收
(function(){
    console.log('niming');
})();

(function(x,y){
    console.log(x + y);
})(2,3);