class Food {
    // 属性就是页面的一个元素
    element: HTMLElement;
    constructor() {
        // ! 的作用表示这个元素不可能为空
        // 获取页面中的food元素将其赋值给element
        this.element = document.getElementById('food')!;
    }
    // 获取食物的坐标
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    // 食物生成随机位置
    // 食物位置的范围0-290
    // 食物的位置必须是整10  要不蛇吃不到 
    // 因为蛇移动一次是加10
    change() {
        // 先随机取0-29里面的整数  再*10
        let top = Math.floor(Math.random() * 30) * 10;
        let left = Math.floor(Math.random() * 30) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';

    }
}

export default Food;