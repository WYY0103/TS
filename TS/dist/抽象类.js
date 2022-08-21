"use strict";
// 抽象类  不能用来创建对象  用来子类继承父类
// 但可以添加抽象方法
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Dog2 extends Animal {
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }
    fn() {
        console.log(`${this.name}`);
    }
}
const doo = new Dog2('wangwang', 4, 'm');
doo.fn();
