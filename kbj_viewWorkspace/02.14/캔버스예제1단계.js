const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

let player = { x: 0, y: 0, size: 50, speed: 5 };
let enemy = { x: canvas.width / 2 - 50, y: canvas.height / 2 - 50, size: 100, color: 'yellow' };


let keyDown = {};

function init() {
    draw();

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEnemy();
    drawPlayer();
    movePlayer();
    if (collision() == true) {
        enemy.color = 'red';
    } else {
        enemy.color = 'yellow';
    }
}

function drawPlayer() {
    ctx.beginPath();
    ctx.rect(player.x, player.y, player.size, player.size);
    ctx.fillStyle = 'blue';
    ctx.fill();
}

function drawEnemy() {
    ctx.beginPath();
    ctx.rect(enemy.x, enemy.y, enemy.size, enemy.size);
    ctx.fillStyle = enemy.color;
    ctx.fill();
}

function movePlayer() {
    if (keyDown['w']) {
        player.y -= player.speed;
    } else if (keyDown['s']) {
        player.y += player.speed;
    } else if (keyDown['a']) {
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

function collision() {  //사각형 중심 구하기
    let px = player.x + player.size / 2;
    let py = player.y + player.size / 2;
    let ex = enemy.x + enemy.size / 2;
    let ey = enemy.y + enemy.size / 2;

    let pdw = ex - px;
    let pdh = ey - py;
    let pdc = pdw * pdw + pdh * pdh;
    return Math.pow(player.size / 2 + enemy.size / 2, 2) > pdc;
}

addEventListener('keydown', (e) => {
    keyDown[e.key] = true;
})

addEventListener('keyup', (e) => {
    keyDown[e.key] = false;
})

setInterval(init, 10);