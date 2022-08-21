"use strict";
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // getName(){
    //     return this.name;
    // }
    // setName(value:string){
    //     this.name = value;
    // }
    // getAge(){
    //     return this.age
    // }
    // setAge(value:number){
    //     if(value > 0){
    //         this.age = value
    //     }
    // }
    // ts中设置getter setter方法
    // 用的时候与属性一样   
    // 就直接po.name1就可以  但实际上调用的是name1方法
    get name1() {
        return this.name;
    }
    set name1(value) {
        this.name = value;
    }
}
// 属性时在对象中设置的
//  属性可以任意修改  会导致对象中的数据不安全
let po = new Person1('zs', 16);
// console.log(po.getName());
po.name1 = 'hahah';
console.log(po.name1);
console.log(po);
