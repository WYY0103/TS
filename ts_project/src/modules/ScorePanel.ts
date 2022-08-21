class ScorePanel {
    score = 0;
    level = 1;
    // 获取到scope和level的元素
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 最大升级数
    maxLevel: number;
    // 几分升一级
    upScore: number

    // 就是es6中的默认值  要是不传递值就使用默认值
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.upScore = upScore;
        this.maxLevel = maxLevel;
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
    }

    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % this.upScore == 0) {
            this.addLevel();
        }
    }

    addLevel() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;