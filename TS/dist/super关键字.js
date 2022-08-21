"use strict";
class Anima {
    constructor(name) {
        this.name = name;
    }
    sayhello() {
        console.log(this.name + 'say hello');
    }
}
class dog extends Anima {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    sayhello() {
        // super 代表当前类的父类
        // super.sayhello();  
        console.log("hahhaha");
    }
}
let o = new dog('zs', 6);
o.sayhello();
