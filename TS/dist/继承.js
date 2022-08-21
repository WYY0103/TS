"use strict";
class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    fn() {
        console.log(99999);
    }
}
// extends  继承
// 子类中如果写了与父类中一样的函数   则子类的函数会覆盖父类的（方法的重写）
// 可以继承  也可修改
class Dog1 extends animal {
    constructor(name, age, sex) {
        //继承父类的属性
        super(name, age);
        this.sex = sex;
    }
    run() {
        console.log(`${this.name}` + "sssss");
    }
    fn() {
        // super调用父类的方法
        super.fn();
        // console.log(8888);       
    }
}
let D = new Dog1('lisi', 18, 'm');
console.log(D);
