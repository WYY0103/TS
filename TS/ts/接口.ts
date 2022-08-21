// 接口就是用来定义类结构   用来定义类中应该具有那些属性和方法
// 接口可重复声明
// 可以定义类的时候限制类的结构
// 只定义对象的的结构   不能指定实际值   接口中的方法都是抽象方法
// 接口就是对类的限制

interface myinterface{
    name:string;
    age:number;
    say():void;
}

interface myinterface{
    sex:string;
}


// implement实现接口   定义类时   可以使类实现接口
 class myclass implements myinterface{
    name: string;
    age:number;
    sex:string;
    constructor(name:string,age:number,sex:string){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    say() {
        console.log(`${this.age}`);      
    } 
 }

let m = new myclass('zs',18,'m');
m.say();
