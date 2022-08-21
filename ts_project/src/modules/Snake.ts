class Snake {
    // html元素  头
    head: HTMLElement;
    // html的集合  身体
    bodies: HTMLCollection;
    // 蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        // 获取snake中的第一个div
        this.head = document.querySelector('#snake>div')!;
        // 获取snake中所有的div
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取舌头位置坐标
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }

    set X(value) {

        if (this.X === value) {
            return;
        }

        // 判断是否撞墙  0-290之间
        if (value < 0 || value > 290) {
            throw new Error('Game over!');
        }

        // 禁止蛇掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                // 蛇在左面  如果向右的话  则left会变大
                // 所以value > this.X大于的时候说明发生掉头
                value = this.X - 10;
            }
            else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();

        
    }

    set Y(value) {

        if (this.Y === value) {
            return;
        }

        if (value < 0 || value > 290) {
            throw new Error('Game over!');
        }


        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                // 蛇在左面  如果向右的话  则left会变大
                // 所以value > this.X大于的时候说明发生掉头
                value = this.Y - 10;
            }
            else {
                value = this.Y + 10;
            }
        }

        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    // 蛇增加身体的方法
    addBody() {
        // 添加一段html代码
        // beforeend 代表在element的结束标签之前的位置
        // 将<div></div>加在lement的结束标签之前的位置
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    // 蛇移动身体
    moveBody() {

        // 将后面的蛇的位置向前移一个
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体位置 类型断言
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // 身体改了
            (this.bodies[i] as HTMLElement).style.left = X + 'PX';
            (this.bodies[i] as HTMLElement).style.top = Y + 'PX';
        }
    }

    checkHeadBody() {
        //   获取所有身体 检查是否和蛇头坐标重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了');
            }
        }
    }



}

export default Snake
