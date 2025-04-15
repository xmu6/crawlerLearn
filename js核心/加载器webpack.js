window = global
!function (e) {
    var t = {};
    window.loader = n

    // 加载器函数，完成某个功能模块的调度
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        // 增加日志
        // console.log('加载模块', r)
        e[r].call(o.exports, o, o.exports, n);
        return o.exports.exports;
    }

    // 内部
    // n(0)
    // console.log(n(1))
}(
    [  // 数组传给e
        function () {
            console.log('foo');
            this.exports = 100;
        },
        function () {
            console.log('bar');
            this.exports = 200;
        },
    ]
);
console.log(window.loader(1))
console.log('------------------------')

// 基于对象的模式
!function (e) {
    var t = {};
    window.loader = n

    function n(r) {

        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        }
        e[r].call(o.exports, o, o.exports, n);
        return o.exports.exports;
    }

    // n('1000')
}(
    {
        '1000': function () {
            console.log('foo');
            this.exports = 100;
        },
        '1001': function () {
            console.log('bar');
            this.exports = 200;
        }
    }
);
console.log(window.loader('1001'))
// webpack流程
// 1. 找调度器loader并本地存储：注意尽量往外层找
// 2. 在调度器中找到调度函数，全局化
// 3. 在调度器函数写入调用模块的日志
// 4. 全局查找依赖的模块，导入执行文件中
// 5. 不要对webpack补环境，直接注释掉初始化操作eg: o(o.s = 0)
