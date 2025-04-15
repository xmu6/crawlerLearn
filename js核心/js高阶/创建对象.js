//两种创建对象的方式
var obj_a = {
    'name': 'bobo',
    'getAge': function () {
        console.log(9)
    }
}

function B() {
    this.name = 'bobo'
    this.getAge = function () {
        console.log(9)
    }
}

obj_b = new B()


//特别的window对象：客户端JavaScript顶层对象。每当<body>或<frameset>元素被插入到文档中时，window对象就会被自动创建。
//window对象数：https://www.processon.com/view/link/66497878cfe67e27899b9e70


//原型链：通过方式一创建的对象不具备原型链
//创建新对象时，设置其原型对象为window
window = {}
a = Object.create(window)
console.log(a.__proto__ === window)  //true


//判断对象自身属性中是否具有指定的属性
console.log(obj_b.hasOwnProperty('name'))  //true
console.log(obj_b.hasOwnProperty('toString'))  //false

//获取指定对象上一个自由属性对应的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj_b, 'name'))
//{value: 'bobo', writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptors(obj_b))
// {
//   name: {
//     value: 'bobo',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   getAge: {
//     value: [Function (anonymous)],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

//对一个已经存在的对象重新设置原型对象
Object.setPrototypeOf(obj_b, Object.prototype)
console.log(obj_b.__proto__ === Object.prototype)  //true

//在一个对象上定义一个新属性，然后指定新属性的属性描述
let User = {
    "name": "xixi",
}
User.age = 18
Object.defineProperty(User, 'height', {
    value: 180, writable: false, enumerable: false, configurable: false
})
for (let key in User) {
    console.log(key)
}  // 无height
User.height = 100
console.log(User.height)  //180

//存储描述符
var temp = null
Object.defineProperty(User, 'score', {
    enumerable: true,
    configurable: true,
    get: function () {
        console.log('get')
        return temp
    },
    set: function (value) {
        console.log('set')
        temp = value
    }
})
User.score = 100 //set
console.log(User.score) //get 100
