const canvas = document.querySelector('#test');
// canvas.setAttribute("width", window.innerWidth);
// canvas.setAttribute("height", window.innerHeight);
const ctx = canvas.getContext('2d');
const message = document.querySelector('.message');

let keyDown = {};
let objectList = [];
let mapList = [new Map1(), new Map2()];

let chatScriptName = "";
let chatScript = new Map([
    ['바다', '파도가 부드럽게 넘실거리고 있다.'],
    ['나무', '나무는 앙상한 가지만 남아있다.']
]);

let backImg = new Image();
backImg.src = "";
// backImg.addEventListener('load', () => {
//     ctx.drawImage(backImg, 0, 0, 800, 600);
// });

mapList.forEach((e) => {
    console.log(e.objList);
})

addEventListener('keydown', (e) => {
    keyDown[e.key] = true;
})

addEventListener('keyup', (e) => {
    keyDown[e.key] = false;
})

class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 50;
        this.speed = 7;
        this.color = 'red';
        this.img = "";
    }

    movePlayer() {
        let px = this.x;
        let py = this.y;
        let isCrash = false;

        if (keyDown['w']) {
            this.y -= this.speed;
            this.img = 'img/player_top.png';
        } else if (keyDown['s']) {
            this.y += this.speed;
            this.img = 'img/player_bottom.png';
        } else if (keyDown['a']) {
            this.x -= this.speed;
            this.img = 'img/player_left.png';
        } else if (keyDown['d']) {
            this.x += this.speed;
            this.img = 'img/player_right.png';
        } else if (keyDown['f']) {

            if (chatScriptName == "") {
                return;
            }

            console.log(chatScript.get(chatScriptName));
            printMessage(chatScript.get(chatScriptName));
            chatScriptName = "";

        }



        let maxX = canvas.width - this.size;
        let maxY = canvas.height - this.size;
        if (this.x <= 0) this.x = 0;
        if (this.x >= maxX) this.x = maxX;
        if (this.y <= 0) this.y = 0;
        if (this.y >= maxY) this.y = maxY;



        objectList.forEach((obj) => {
            if (this.collision(obj)) {
                isCrash = true;
                chatScriptName = obj.name;
                //스위치문
                if (obj.name == '바다') {
                    console.log('바다');
                }
                if (obj.name == '나무') {
                    console.log('나무');
                }
                if (obj.name == '문') {
                    console.log('문');
                    this.x = 650;
                    isCrash = false;

                    map2();

                }
                if (obj.name == '문2') {
                    this.x = 505;
                    this.y = 430;
                    isCrash = false;

                    map1();

                }
                return false;
            }
        })

        console.log("test=", isCrash);
        if (isCrash) {
            this.x = px;
            this.y = py;
        }
        console.log(this.x, ": ", this.y);



    }


    inRect(obj, px, py) {
        if (obj.x < px && px < obj.x + obj.width && obj.y < py && py < obj.y + obj.height) {
            return true;
        } else {
            false;
        }
    }

    collision(obj) {
        if (this.inRect(obj, this.x, this.y)) return true;
        // player의 오른쪽 상단 모서리가 닿으면
        else if (this.inRect(obj, this.x + this.size, this.y)) return true;
        // player의 왼쪽 하단 모서리가 닿으면
        else if (this.inRect(obj, this.x, this.y + this.size)) return true;
        // player의 오른쪽 하단 모서리가 닿으면
        else if (this.inRect(obj, this.x + this.size, this.y + this.size)) return true;
        else return false;

    }

    render(ctx) {
        this.movePlayer();
        let playerImg = new Image();
        playerImg.src = this.img;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.drawImage(playerImg, this.x, this.y, this.size, this.size);
        ctx.fill();
    }

    mapRender(ctx, mapObj) {
        this.movePlayer();
        ctx.beginPath();
        ctx.fillStyle = mapObj.color;
        ctx.rect(mapObj.x, mapObj.y, mapObj.width, mapObj.height);
        ctx.fill();
    }

}

class Object {
    constructor(img, name, x, y, width, height) {
        this.img = img;
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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
}


let player = new Player();


function map1() {
    backImg.src = "img/test1.jpg";
    objectList = [];
    objectList.push(new Object('img/snoopy.png', '바다', 0, 190, 90, 320));
    objectList.push(new Object('img/snoopy.png', '바다', 90, 240, 90, 300));
    objectList.push(new Object('img/snoopy.png', '바다', 180, 290, 130, 140));
    objectList.push(new Object('img/snoopy.png', '풍차', 145, 710, 100, 50));
    objectList.push(new Object('img/snoopy.png', '풍차', 350, 530, 100, 50));
    objectList.push(new Object('img/snoopy.png', '풍차', 410, 710, 100, 50));
    objectList.push(new Object('img/snoopy.png', '풍차', 600, 605, 100, 50));
    objectList.push(new Object('img/snoopy.png', '풍차', 705, 565, 100, 50));
    objectList.push(new Object('img/snoopy.png', '나무', 290, 630, 70, 150));
    objectList.push(new Object('img/snoopy.png', '나무', 625, 420, 70, 150));
    objectList.push(new Object('img/check.png', '숲', 0, 10, 420, 60));
    objectList.push(new Object('img/check.png', '숲', 90, 85, 380, 40));
    objectList.push(new Object('img/check.png', '숲', 305, 150, 120, 60));
    objectList.push(new Object('img/check.png', '숲', 410, 210, 50, 120));
    objectList.push(new Object('img/check.png', '숲', 790, 350, 120, 200));
    objectList.push(new Object('img/check.png', '숲', 0, 830, 470, 50));
    objectList.push(new Object('img/check.png', '숲', 570, 830, 500, 50));
    objectList.push(new Object('img/check.png', '숲', 1000, 740, 50, 70));
    objectList.push(new Object('img/check.png', '집', 550, 190, 250, 150));
    objectList.push(new Object('img/check.png', '학원', 790, 640, 50, 70));
    objectList.push(new Object('img/check.png', '학원', 920, 640, 100, 70));
    objectList.push(new Object('img/bug.png', '문', 485, 250, 50, 50));
    objectList.push(new Object('img/bug.png', '문', 855, 655, 50, 50));
    objectList.push(new Object('img/bug.png', '문', 485, 843, 50, 50));
    // console.log(objectList);
    // objectList.forEach((e) => {
    //     console.log(e.x);
    // })
}

function map2() {
    backImg.src = "img/test5.jpg";
    objectList = [];
    objectList.push(new Object('', '풍차', 50, 50, 300, 500, 'blue'));
    objectList.push(new Object('img/bug.png', '문2', 750, 300, 50, 50, 'purple'));
    objectList.push(new Object('', '토끼', 700, 200, 10, 10, 'white'));
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
    // 맵 객체 만들어서 화면에 같이 뿌리기 
    // 맵 객체 [초기화면1, 초기화면2 ]

    objectList.forEach((e) => {
        e.render(ctx);
    })
    player.render(ctx);

}

function init() {
    player.x = 15;
    player.y = 115;
}

function printMessage(chatScript) {
    message.style.opacity = 1;
    let count = 0;
    let content = `${chatScript}`;
    let msgText = setInterval(() => {
        message.innerHTML += content[count++];
        if (count == content.length) {
            clearInterval(msgText);
            setTimeout(() => {
                message.style.opacity = 0;
            }, 1500);
        };
    }, 150);
    message.innerHTML = "";
}

map1();
init();
setInterval(draw, 10);
