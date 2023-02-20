
class Fish {
    constructor(img, name, width) {
        this.img = img;
        this.name = name;
        this.x = Math.random() * 900 + 100;
        this.y = Math.random() * 900 + 300;
        this.width = width;
        this.height = 50;
        // this.color = color;
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

    moveFish(obj) {

        const speed = Math.floor(Math.random() * 10 + 1);


        if (obj.y % 2 == 0) {
            obj.x += speed;
            if (obj.x == obj.x + 100) {
                obj.x -= speed;
            } else if (obj.x == obj.x - 100) {
                obj.x += speed;
            }
        } else if (obj.y % 2 !== 0) {
            obj.x -= speed;
            if (obj.x == obj.x - 100) {
                obj.x += speed;
            } else if (obj.x == obj.x + 10) {
                obj.x -= speed;
            }
        }



    }

}


