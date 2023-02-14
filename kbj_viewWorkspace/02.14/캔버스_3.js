const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let player = { "x": 0, "y": 0, "size": 50, "speed": 3 };

let keyDown = {};

window.addEventListener("keydown", (e) => {
    keyDown[e.key] = true;

})
window.addEventListener("keyup", (e) => {
    keyDown[e.key] = false;
})

function movePlayer() {
    if (keyDown["ArrowUp"]) {
        player.y -= player.speed;
        console.log("test");
    } else if (keyDown["ArrowRight"]) {
        player.x += player.speed;

    } else if (keyDown["ArrowDown"]) {
        player.y += player.speed;
    } else if (keyDown["ArrowLeft"]) {
        player.x -= player.speed;
    }

    if (player.x <= 0) player.x = 0;
    if (player.y <= 0) player.y = 0;
    if (player.x >= canvas.width - player.size) player.x = canvas.width - player.size;
    if (player.y >= canvas.height - player.size) player.y = canvas.height - player.size;

}

// 그림판 새로고침 
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    movePlayer();

}

let playerImg = new Image();  // <img>
playerImg.src = "snoopy.png";


function drawPlayer() {
    ctx.beginPath();
    ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
    ctx.closePath();
}

window.setInterval(draw, 10); 