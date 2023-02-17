const canvas = document.querySelector('#test');
const ctx = canvas.getContext('2d');
const map1 = document.querySelector('.map1');

let keyDown = {};
let objectList = [];
let mapList = [new Map1(), new Map2()];

addEventListener('keydown', (e) => {
    keyDown[e.key] = true;
})

addEventListener('keyup', (e) => {
    keyDown[e.key] = false;
})

class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 50;
        this.speed = 5;
        this.color = 'red';
    }

    movePlayer() {
        let px = this.x;
        let py = this.y;
        let isCrash = false;
        if (keyDown['w']) {
            this.y -= this.speed;
        } else if (keyDown['s']) {
            this.y += this.speed;
        } else if (keyDown['a']) {
            this.x -= this.speed;
        } else if (keyDown['d']) {
            this.x += this.speed;
        }



        let maxX = canvas.width - this.size;
        let maxY = canvas.height - this.size;
        if (this.x <= 0) this.x = 0;
        if (this.x >= maxX) this.x = maxX;
        if (this.y <= 0) this.y = 0;
        if (this.y >= maxY) this.y = maxY;



        objectList.forEach((obj) => {
            if (this.collision(obj)) {
                isCrash = true;
                if (obj.name == '바다') {
                    console.log('바다');
                }
                if (obj.name == '나무') {
                    console.log('나무');
                }
                if (obj.name == '문') {
                    console.log('문');
                    const maptest1 = mapList.find(e => e.name == '초기화면1');
                    maptest1.render(ctx);
                }
                return false;
            }
        })
        console.log("test=", isCrash);
        if (isCrash) {
            this.x = px;
            this.y = py;
        }

        console.log(this.x, ": ", this.y);

    }


    inRect(obj, px, py) {
        if (obj.x < px && px < obj.x + obj.width && obj.y < py && py < obj.y + obj.height) {
            return true;
        } else {
            false;
        }
    }

    collision(obj) {
        if (this.inRect(obj, this.x, this.y)) return true;
        // player의 오른쪽 상단 모서리가 닿으면
        else if (this.inRect(obj, this.x + this.size, this.y)) return true;
        // player의 왼쪽 하단 모서리가 닿으면
        else if (this.inRect(obj, this.x, this.y + this.size)) return true;
        // player의 오른쪽 하단 모서리가 닿으면
        else if (this.inRect(obj, this.x + this.size, this.y + this.size)) return true;
        else return false;

    }

    render(ctx) {
        this.movePlayer();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fill();
    }

    mapRender(ctx, mapObj) {
        this.movePlayer();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(mapObj.x, mapObj.y, mapObj.width, mapObj.height);
        ctx.fill();
    }
}

class Object {
    constructor(name, x, y, width, height, color) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
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

let player = new Player();

function add() {
    objectList.push(new Object('바다', 0, 300, 300, 500, 'aqua'));
    objectList.push(new Object('나무', 400, 170, 100, 300, 'green'));
    objectList.push(new Object('문', 750, 300, 20, 20, 'purple'));
    console.log(objectList);
    objectList.forEach((e) => {
        console.log(e.x);
    })
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 맵 객체 만들어서 화면에 같이 뿌리기 
    // 맵 객체 [초기화면1, 초기화면2 ]
    objectList.forEach((e) => {
        e.render(ctx)
    })
    player.render(ctx);
}



add();
setInterval(draw, 10);