const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let key = { right: false, left: false, up: false, down: false };
let player = { x: 0, y: 0, size: 50, speed: 3 };

function init() {
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
}

function keyDownHandler(e) {
    if (e.key == "ArrowUp") {
        key.up = true;
    } else if (e.key == "ArrowRight") {
        key.right = true;
    } else if (e.key == "ArrowDown") {
        key.down = true;
    } else if (e.key == "ArrowLeft") {
        key.left = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "ArrowUp") {
        key.up = false;
    } else if (e.key == "ArrowRight") {
        key.right = false;
    } else if (e.key == "ArrowDown") {
        key.down = false;
    } else if (e.key == "ArrowLeft") {
        key.left = false;
    }
}

function draw() {
    //새로고침위한함수
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    drawPlayer();
    movePlayer();
}

let playerImg = new Image(); // <img>
playerImg.src = "snoopy.png";

// playerImg.addEventListener('load', () => {
//     ctx.drawImage(playerImg, 0, 0, player.size, player.size);
// })

function drawPlayer() {
    ctx.beginPath();
    // ctx.rect(player.x, player.y, player.size, player.size);
    ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
    ctx.fillStyle = "blue";
    ctx.fill();
    // ctx.closePath(); 
    //fill() 메소드 호출 시, 열린 도형은 자동으로 닫히게 되므로 closePath()메소드를 호출하지 않아도 됩니다.
}
function movePlayer() {
    if (key.right && player.x < canvas.width - player.size) {
        player.x += player.speed;
    } else if (key.left && player.x > 0) {
        player.x -= player.speed;
    } else if (key.down && player.y < canvas.height - player.size) {
        player.y += player.speed;
    } else if (key.up && player.y > 0) {
        player.y -= player.speed;
    }
}

init();
//window.setInterval(draw, 10);
//window 생략가능
setInterval(draw, 10);
