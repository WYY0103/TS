// 声明变量   并指定类型    
// 在使用过程中只能为指定类型
// ts可以编译成任意版本

let str: number = 10;
let str2: String = 'aa';
//声明与赋值在一起
let c = 'a';  

// 对变量严格要求  从类型  数量  
// 参数指定类型  函数也可指定返回值类型
function sum(a:number, b:number) : number{
    return a + b ;
}
console.log(sum(1,2));

















