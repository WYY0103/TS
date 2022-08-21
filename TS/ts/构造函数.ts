class Dog{
    name:string;
    age:number;
    // 创建出不同的实例   this指向当前实例
    constructor(name:string,age:number){
        this.name = name,
        this.age = age 
    }
    fn(){
        console.log(this);
        
        console.log(this.name);
    }
}

let d1  = new Dog('zs',18);
d1.fn();
