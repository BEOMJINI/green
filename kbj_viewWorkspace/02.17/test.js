const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// 개구리 길건너기 게임 , 차에 치이면 위치 초기화 같은거
class Enemy {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.size = 50;
        // this.speed = parseInt(Math.random() * 10) + 1;
        this.speed = speed;
    }



    draw(ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = 'red';
        ctx.fill();
        this.move();

    }

    move() {
        if (this.x < canvas.width) {
            this.x += this.speed;
            if (this.x == canvas.width) {
                this.x = 0;
            }
        }

        if (this.x > canvas.width) {
            this.x -= this.speed;
            if (this.x == 0) {
                this.x = canvas.width;
            }
        }

        // this.x += this.speed;
        // this.y += this.speed;
        // if (this.x == 500) {
        //     this.x = 200;

        // }
        // if (this.y == 500) {
        //     this.y = 200;
        // }
    }


}
let e1 = new Enemy(0, 200, 2);
let e2 = new Enemy(500, 400, 3);
let e3 = new Enemy(0, 600, 2);

let eList = [e1, e2, e3];

eList.forEach((e) => {
    setInterval(() => {
        e.draw(ctx);

        // e1.draw(ctx);
        // e2.draw(ctx);
        // e3.draw(ctx);
    }, 20);
});

// setInterval(() => {
//     e1.draw(ctx);
// }, 20);