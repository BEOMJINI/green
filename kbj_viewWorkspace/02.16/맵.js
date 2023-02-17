class Map1 {
    constructor() {
        this.name = '초기화면1';
        this.objList = [];
        this.objList.push(new Tree(50, 50));
        this.objList.push(new Tree(150, 150));
    }
}

class Map2 {
    constructor() {
        this.name = '초기화면2';
        this.objList = [];
        this.objList.push(new Tree(100, 100));
        this.objList.push(new Tree(400, 300));
    }
}

class Tree {
    constructor(x, y) {
        this.name = '나무';
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 300;
        this.color = 'green';

    }
}