//hook:监控函数、属性；proxy：对象
var User = {
    name: '张三',
    age: 18
}
//创建代理对象，代理原始对象
User = new Proxy(User, {
    get(target, p, receiver) {
        console.log(`获取${p}属性`);
        return Reflect.get(target, p, receiver);
    },
    set(target, p, value, receiver) {
        console.log(`设置${p}属性`);
        return Reflect.set(target, p, value, receiver);
    }
})
console.log(User.name);
User.age = 20;
console.log(User.age);

//以上方法无法监控通过属性描述符取的值。
console.log(Object.getOwnPropertyDescriptor(User, 'name').value);  //张三
User = new Proxy(User, {
    // get(target, p, receiver) {
    //     console.log(`获取${p}属性`);
    //     return Reflect.get(target, p, receiver);
    // },
    // set(target, p, value, receiver) {
    //     console.log(`设置${p}属性`);
    //     return Reflect.set(target, p, value, receiver);
    // },
    getOwnPropertyDescriptor(target, p) {
        let result;
        result = Reflect.getOwnPropertyDescriptor(target, p);
        console.log(`获取${p}属性描述符`);
        return result;
    },
    defineProperty(target, p, attributes) {
        console.log(`设置${p}属性描述符`);
        let result;
        result = Reflect.defineProperty(target, p, attributes);
        return result;
    }
})
console.log('----------------');
console.log(Object.getOwnPropertyDescriptor(User, 'name').value);
console.log('----------------');
Object.defineProperty(User, 'name', {
    value: '李四',
    writable: true,
    configurable: true,
    enumerable: true,
});
