// 抽象类  不能用来创建对象  用来子类继承父类
// 但可以添加抽象方法
abstract class Animal{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    
    // 抽象方法  没有方法体  只有方法声明
    // 这样可以让子类自己定义所需的方法逻辑  子类中要对方法重写
    abstract fn():void;
}

class Dog2 extends Animal{
    sex:string;
    constructor(name:string,age:number, sex:string){
        super(name,age);
        this.sex = sex;
    }
    fn() {
        console.log(`${this.name}`);      
    }
}

const doo = new Dog2('wangwang',4,'m');
doo.fn();



