function People(name, age) {  //原型对象
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(this.name + " is running");
    }
}

//实例对象
p1 = new People("John", 20);
// console.log(p1.name);
// console.log(p1.age);
// p1.run();
// p1['run']()

//给人对象添加一个address属性和一个吃饭的功能
People.prototype.address = "Beijing";
People.prototype.eat = function () {
    console.log(this.name + " is eating");
}
let p2 = new People("Tom", 25);
// console.log(p2.address);
// console.log(p1.address);
// p2.eat();
// p1.eat();
console.log(p1.__proto__)
p1.__proto__.gender = "male";
p1.__proto__.drink = function () {
    console.log(this.name + " is drinking");
}
console.log(p2.gender);
p2.drink();
console.log(p2.__proto__ === People.prototype);  //true

//总结：
//1.prototype关键字可以给对象动态添加成员
//2.原型对象中的成员可以被所有实例对象共享
//3.对象在调用某一个成员时，该成员有可能是对象自身封装的成员，也可能是该对象原型上的成员
