"use strict";
// function fn(a:number):number{
//     return a;
// }
// 定义函数或者类时  不确定类型时可以使用泛型
// T代表类型  就是一个泛型  在执行函数时指定类型
function ho(a) {
    return a;
}
// 会根据传递的参数来判断类型
let result = ho(10);
// 指定类型
let result2 = ho('hello');
// 可以指定多个泛型
function hoo(m, n) {
    console.log(n);
    return m;
}
hoo('a', 4);
