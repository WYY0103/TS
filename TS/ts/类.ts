class Person{
    // 实例属性  只有new以后才可以看到   可以随意修改  但是要是加上readonly   就只能read  不能write
    // 在属性前使用static可以定义静态属性   不用new就可以看到
    // static  类下面的方法和属性  无需实例调用
    name:string = 'aa';
    static age :number = 14;

    // 方法   static与属性一样
    fn(){
        console.log(1111);       
    }
}

let p = new Person();
// console.log(p.name);
// console.log(p.fn());


console.log(Person.age);







