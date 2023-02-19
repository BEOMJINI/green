const canvas = document.querySelector('#test');
// canvas.setAttribute("width", window.innerWidth);
// canvas.setAttribute("height", window.innerHeight);
const ctx = canvas.getContext('2d');
const message = document.querySelector('.message');

let keyDown = {};
let mainObjectList = [];
let mapList = [new Map1(), new Map2(), new Map3(), new Map4()];
// let object = new Object();
let chat = new Chat();


let currentMapName = "메인맵";

let chatScriptName = "";
// let chatScript = new Map([
//     ['바다', '파도가 부드럽게 넘실거리고 있다.'],
//     ['나무', '나무는 앙상한 가지만 남아있다.']
// ]);

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
        this.speed = 10;
        this.color = 'red';
        this.img = "";
    }

    movePlayer() {
        let px = this.x;
        let py = this.y;
        let ps = this.size;
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
            if (message.style.opacity == 1) {
                return;
            }
            console.log(chat.chat.get(chatScriptName));
            // console.log(chatScript.get(chatScriptName));
            printMessage(chat.chat.get(chatScriptName));
            chatScriptName = "";

        } else if (keyDown['i']) {
            if (message.style.opacity == 1) {
                return;
            }
            printMessage(itemList);
        }



        let maxX = canvas.width - this.size;
        let maxY = canvas.height - this.size;
        if (this.x <= 0) this.x = 0;
        if (this.x >= maxX) this.x = maxX;
        if (this.y <= 0) this.y = 0;
        if (this.y >= maxY) this.y = maxY;



        mainObjectList.forEach((obj) => {
            if (obj.collision(player.x, player.y, player.size)) {
                isCrash = true;
                chatScriptName = obj.name;
                //스위치문

                switch (obj.name) {
                    case '집입구':

                        break;
                    case '학원입구':
                        currentMapName = '학원맵';
                        px = 0;
                        py = 0;
                        break;
                    case '길건너기입구':
                        currentMapName = '길건너기맵';
                        px = 575;
                        py = 80;
                        break;
                    case '길에서메인으로':
                        currentMapName = '메인맵';
                        px = 485;
                        py = 850 - 80;
                        break;
                    case '자동차':
                        px = 575;
                        py = 80;
                        break;
                    case '길에서농사로':
                        currentMapName = '농사맵';
                        px = 575;
                        py = 80;
                        break;
                    case '벌레':
                        obj.x = 1300;
                        obj.speed = 0;
                        break;
                    default:
                        break;
                }

                // if (obj.name == '바다') {
                //     console.log('바다');
                // }
                // if (obj.name == '나무') {
                //     console.log('나무');
                // }
                // if (obj.name == '문') {
                //     console.log('문');
                //     this.x = 650;
                //     // isCrash = false;



                // }
                // if (obj.name == '문2') {
                //     this.x = 505;
                //     this.y = 430;
                //     // isCrash = false;



                // }
                // if (obj.name == '문3') {
                //     map4();
                //     this.x = 110;
                //     this.y = 700;
                // }
                // if (obj.name == '학원출구') {
                //     map1();
                //     this.x = 848;
                //     this.y = 731;
                // }
                // if (obj.name == '학원입구') {
                //     console.log('ㅎㄱ원익부');
                //     px = 595;
                //     py = 715;
                //     currentMapName = '학원맵';
                // }
                return false;
            }
            // else {
            //     console.log("길~~~~~")
            // }
        })

        console.log("test=", isCrash);
        if (isCrash) {
            this.x = px;
            this.y = py;
        }
        console.log(this.x, ": ", this.y);



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



let player = new Player();


function mainMap() {
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
    objectList.push(new Object('img/bug.png', '집입구', 485, 250, 50, 50));
    objectList.push(new Object('img/bug.png', '학원입구', 855, 655, 50, 50));
    objectList.push(new Object('img/bug.png', '문3', 485, 843, 50, 50));
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

function map3() {
    backImg.src = "";
    objectList = [];
    objectList.push(new Object('img/bug.png', '학원출구', 560, 800, 50, 50));
    objectList.push(new Object('img/bug.png', '책상', 100, 100, 200, 200));
}

function map4() {
    backImg.src = "";
    objectList = [];
    objectList.push(new Object('img/bug.png', '문4', 21, 700, 50, 50));
}

function map5() {

}
const bugs = new Bug();
let qkq = null;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
    // 맵 객체 만들어서 화면에 같이 뿌리기 
    // 맵 객체 [초기화면1, 초기화면2 ]

    mapList.forEach((e) => {
        if (e.name == currentMapName) {
            if (currentMapName == '농사맵') {
                mainObjectList = [];
                mainObjectList = e.objectList;
                qkq = mainObjectList.find(e => e.name == '정원');
                // bugs.moveBug(qkq.x, qkq.y);
                // bugs.setBugs(mainObjectList);
                console.log(mainObjectList);
            } else {
                // console.log(e.objectList);
                mainObjectList = [];
                mainObjectList = e.objectList;
                console.log(mainObjectList);
                // console.log(e.backImgName);
                backImg.src = e.backImgName;
            }
        }
    })
    player.render(ctx);
    mainRender(ctx, mainObjectList);

    // objectList.forEach((e) => {
    //     e.render(ctx);
    // })

}

const c = new Car();
function mainRender(ctx) {


    mainObjectList.forEach((obj) => {

        if (obj.name == '자동차') {
            c.moveCar(obj);
        }
        if (obj.name == '벌레') {
            // bugs.init(obj, qkq.x, qkq.y);
            // bugs.test(obj);
            bugs.moveBug(obj, qkq);
        }

        let img = new Image();
        img.src = obj.img;
        ctx.beginPath();
        ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);
        ctx.fill();

    })

}

// function moveCar(obj) {
//     if (obj.name = '자동차') {
//         const speed = Math.random() * 10 + 1;
//         if (obj.x == 0) {
//             obj.x += speed;


//         }
//     }

// }

function init() {
    player.x = 15;
    player.y = 115;
}

function printMessage(chatScript) {
    if (chatScript == undefined) {
        return;
    }
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

// mainMap();
// let dd = new Map1();
// dd.init();

init();
setInterval(draw, 20);
