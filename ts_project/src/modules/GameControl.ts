import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {

    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    // 存储蛇的移动方向
    direction: string = ''

    // 记录游戏是否结束
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    // 初始化
    init() {
        // 绑定键盘按下事件   
        // 这里的this指向document  
        // 所以event.key存不到direction中
        // 所以要修改this指向   
        document.addEventListener('keydown', this.keydownHandler.bind(this));
    }

    // 键盘按下相应的函数
    keydownHandler(event: KeyboardEvent) {
        // event.key获取到用户按下的是那个键
        // 用户按下键的时候记录按下的是那个键
        // 这里的this指向document  
        // 所以event.key存不到direction中      
        this.direction = event.key;
        this.run();
    }

    // 蛇移动
    run() {
        // 获取现在蛇的位置
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键方向修改值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动纵向减10
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        // 蛇吃到食物
        this.checkEat(X, Y);

        // 将修改的值赋给蛇的值  让蛇移动起来
        // try catch 捕获异常  当蛇撞墙的时候捕获异常弹出game over
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert((e as Error).message);
            this.isLive = false
        }


        // 通过级别控制蛇的速度
        // 并且在游戏还没结束时才可以继续移动
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    // 蛇吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            // 食物位置改变
            this.food.change();
            // 分数加一
            this.scorePanel.addScore();
            // 蛇变长
            this.snake.addBody();
        }

    }


}

export default GameControl