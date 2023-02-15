const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

let player = { x: 0, y: 600, size: 50, speed: 5 };
let playerImg = new Image();
playerImg.src = 'bug.png';

let enemyList = [];

class Enemy {
    constructor(x) {
        this.x = x;
        this.y = 50;
        this.size = 60;
        this.color = 'yellow';


    }

    render(ctx) {
        let enemyImg = new Image();
        enemyImg.src = 'bug.png';
        let speed = Math.random() * 5 + 1;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.drawImage(enemyImg, this.x, this.y += speed, this.size, this.size);
        ctx.fill();
        console.log(this.x + ":" + this.y);
        if (this.y > canvas.height) {
            this.y = 50;
        }
    }

    collision() {  //사각형 중심 구하기
        let px = player.x + player.size / 2;
        let py = player.y + player.size / 2;
        let ex = this.x + this.size / 2;
        let ey = this.y + this.size / 2;

        let pdw = ex - px;
        let pdh = ey - py;
        let pdc = pdw * pdw + pdh * pdh;

        return Math.pow(player.size / 2 + this.size / 2, 2) > pdc;
    }
}

let keyDown = {};

function createE() {
    for (let i = 0; i < 7; i++) {
        enemyList[i] = new Enemy(10 + (120 * i));
    }

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    movePlayer();
    enemyList.forEach((e) => {
        e.render(ctx);
        if (e.collision() == true) {
            clearInterval(game);
        }
    });
}

function drawPlayer() {
    ctx.beginPath();
    ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
    ctx.fillStyle = 'blue';
    ctx.fill();
}

function movePlayer() {

    if (keyDown['a']) {
        player.x -= player.speed;
    } else if (keyDown['d']) {
        player.x += player.speed;
    }
    let maxX = canvas.width - player.size;
    let maxY = canvas.height - player.size;
    if (player.x <= 0) player.x = 0;
    if (player.x >= maxX) player.x = maxX;
    if (player.y <= 0) player.y = 0;
    if (player.y >= maxY) player.y = maxY;
}

addEventListener('keydown', (e) => {
    keyDown[e.key] = true;
})

addEventListener('keyup', (e) => {
    keyDown[e.key] = false;
})

createE();
let game = setInterval(draw, 10);