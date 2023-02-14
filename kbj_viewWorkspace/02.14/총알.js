class Bullet {
    constructor() {
        this.radius = 7;
        this.speed = 2;
        this.color = 'green'
        this.x;
        this.y;
        this.dx;   //도착 x
        this.dy;
        this.cwidth = 800;
        this.cheight = 400;
    }

    init(px, py) {
        let location = Math.floor(Math.random() * 4);

        if (location == 0) {//상
            this.x = Math.random() * (this.cwidth - this.radius);
            this.y = 10;
        } else if (location == 1) {//좌
            this.x = 10;
            this.y = Math.random() * (this.cheight - this.radius);
        } else if (location == 2) {//하
            this.x = Math.random() * (this.cwidth - this.radius);
            this.y = this.cheight - 10;
        } else if (location == 3) {//우
            this.x = this.cwidth - 10;
            this.y = Math.random() * (this.cheight - this.radius);
        }
        //플레이어좌표로 도착지점세팅
        let dx = px - this.x;
        let dy = py - this.y;
        let c = Math.sqrt(dx * dx + dy * dy);
        //조금씩 나눠이동
        this.dx = dx / c;
        this.dy = dy / c;
    }
    update(px, py) {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;

        //총알이 화면 밖으로 나갔을때 다시 장전
        //나가는 경우 상x 상y 하x 하y

        if (this.x <= this.radius || y <= this.radius ||
            this.x > this.cwidth + this.radius || this.y > this.cheight + this.radius) {
            this.init(px, py); //다시 현재 플레이어값을 유도로 총알 장전
        }
    }

    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}