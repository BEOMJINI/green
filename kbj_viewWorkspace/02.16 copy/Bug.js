
class Bug {
    constructor() {
        this.img = './img/bug.png';
        this.name = '벌레';
        this.width = 50;
        this.height = 50;
        this.speed = 1;
        this.x;
        this.y;
        this.targetX;
        this.targetY;
    }


    render(ctx) {
        let objImg = new Image();
        objImg.src = this.img;
        ctx.beginPath();
        // ctx.fillStyle = this.color; 
        ctx.drawImage(objImg, this.x, this.y, this.width, this.height);
        ctx.fill();

    }


    inRect(px, py) {
        if (this.x < px && px < this.x + this.width && this.y < py && py < this.y + this.height) {
            return true;
        } else {
            false;
        }
    }

    collision(px, py, size) {

        if (this.inRect(px, py)) return true;
        // player의 오른쪽 상단 모서리가 닿으면
        else if (this.inRect(px + size, py)) return true;
        // player의 왼쪽 하단 모서리가 닿으면
        else if (this.inRect(px, py + size)) return true;
        // player의 오른쪽 하단 모서리가 닿으면
        else if (this.inRect(px + size, py + size)) return true;
        else return false;

    }

    init(gardenX, gardenY) {
        const dir = Math.floor(Math.random() * 2);
        if (dir == 0) {
            this.x = 0;
            this.y = Math.random() * 900;
        } else {
            this.x = 1200;
            this.y = Math.random() * 900;
        }
        let xx = gardenX - this.x;
        let yy = gardenY - this.y;
        let zz = Math.sqrt(xx * xx + yy * yy);
        this.targetX = xx / zz;
        this.targetY = yy / zz;

    }

    createBug(gardenX, gardenY) {
        this.x += this.targetX * this.speed;
        this.y += this.targetY * this.speed;

    }

}