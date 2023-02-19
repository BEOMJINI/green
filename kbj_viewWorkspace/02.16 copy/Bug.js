
class Bug {
    constructor(img, name) {
        this.img = img;
        this.name = name;
        this.x = this.addX();
        this.y = Math.random() * 900 + 100;
        this.width = 50;
        this.height = 50;
        this.speed = 1;
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

    moveBug(obj, qkq) {
        let dx = qkq.x + qkq.width / 2 - obj.x - obj.width / 2;
        let dy = qkq.y + qkq.height / 2 - obj.y - obj.height / 2;
        let c = Math.sqrt(dx * dx + dy * dy);

        let tdx = dx / c;
        let tdy = dy / c;

        obj.x += tdx * obj.speed;
        obj.y += tdy * obj.speed;

        let a = Math.floor(obj.x);
        let b = Math.floor(obj.y);

        if (a == 585 && b == 425) {
            obj.x = 1300;
            obj.speed = 0;
            qkq.img = 'img/bug.png';
        }
    }
    addX() {
        const dir = Math.floor(Math.random() * 2);
        let x = 0;
        if (dir == 0) {
            x = 20;
        } else {
            x = 1180;
        }
        return x;
    }

}


