class Anima {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    sayhello() {
        console.log(this.name + 'say hello');
    }
}

class dog extends Anima{
    age:number;
    constructor(name:string,age:number){
        super(name);
        this.age = age
    }

    sayhello(){
        // super 代表当前类的父类
        // super.sayhello();  
        console.log("hahhaha");          
    }
}

let o = new dog('zs',6);
o.sayhello();