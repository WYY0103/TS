class Person1 {
    // 可在属性前面添加修饰符  用来防止安全
    /*
        public  ：属性可以在任意位置访问
        private：私有属性  属性只能在类内部进行访问以及修改
        通过在类中添加方法使得私有属性可以被外部访问

        protected  受保护的属性  只能在当前类以及子类中访问和修改
     */
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
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
    get name1(){
        return this.name
    }

    set name1(value){
        this.name = value;
    }


}
// 属性时在对象中设置的
//  属性可以任意修改  会导致对象中的数据不安全
let po = new Person1('zs', 16);
// console.log(po.getName());
po.name1 = 'hahah'
console.log(po.name1);

console.log(po);
