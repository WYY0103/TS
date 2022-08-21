"use strict";
// 使用字面量声明类型  但不可修改
let a;
// 用 | 来连接多个类型  联合类型  可以多次修改值
let b;
b = 1;
b = 2;
b = false;
b = "hahah";
// any  任意类型   关闭了类型监测    
// 声明变量不指定类型  会自动就是any
let c1;
c1 = 4;
c1 = 'hahaha';
c1 = true;
// any可以赋值给任意变量
let s;
s = c1;
// unknown  未知类型   
let d;
d = 'kkk';
d = false;
// 与any差不多   但是不能赋值给别的变量
// s = d;
// 若想赋值  则进行类型判断
if (typeof d == "string") {
    s = d;
}
// 或者用类型断言  告诉解析器变量的实际类型
// 变量 as 类型
// <类型> 变量
s = d;
s = d;
let fff;
let ff;
ff = true;
fff = ff;
fff = ff;
// 设置函数返回值
// 不设置返回值的时候会自动设置成void
// 无返回值就设为void  空值
function fn() {
    return 1;
}
// 函数要是设定了void就不能返回其他类型的值
// function foo():void{
//     return 'a';
// }
// 没有指定返回类型时会根据返回值的情况判断类型
// function f(num){
//     if(num > 0){
//         return true;
//     }else{
//         return 123;
//     }
// }
// never没有值  永远不会返回结果  连空值都没有
// 报错的函数
function fnn() {
    throw new Error('error');
}
// object   对象  
// {属性  类型}可以直接声明对象  
// 一一对应  ?：表示可选属性   
// [propName:string]:any   表示任意类型的属性（propName写什么都可  代表属性名）
let obj2;
obj2 = { name: 'aa', address: 'aaa', age: 18, sex: true };
console.log(obj2.name);
// 表明f1函数有两个参数  函数返回值也是number
// 设置函数结构的声明   函数名:(参数)=>返回类型
let f1;
f1 = function (m, n) {
    return m + n;
};
// console.log('haha',f1(1,3));
// 数组相加
let arr5 = [];
let fun = function (arr3, arr4) {
    for (let i = 0, j = 0; i < arr3.length && j < arr4.length; i++, j++) {
        arr5[j] = arr3[i] + arr4[j];
    }
    return arr5;
};
console.log(fun([1, 2, 3], [4, 5, 6]));
// array   数组名:类型[]
let arr;
arr = [1, 2, 3];
let arr2;
// 元组   固定长度的数组  名:[类型  类型]
let h;
h = ['a', 1];
// 枚举     将所有可能的情况列出来
// 枚举类   enum 类名{}
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
let person;
person = {
    name: 'zs',
    gender: Gender.male
};
console.log(person.gender === Gender.male);
// &  同时满足
let j;
j = {
    name: 'lisi',
    age: 20
};
