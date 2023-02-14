let timer = setInterval(draw, 10);
let radius = 10;
let x = radius;

function draw() {
    let canvas = document.querySelector(".canvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "green";
    ctx.fillRect(30, 30, 50, 50);
}

draw();
