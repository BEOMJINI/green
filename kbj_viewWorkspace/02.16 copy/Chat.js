class Chat {
    constructor() {
        this.chat = new Map();
        this.init();
    }
    //map.set(key, value)
    init() {
        this.chat.set('바다', '파도가 부드럽게 넘실거리고 있다.');
        this.chat.set('나무', '큰 나무가 서있다.')
        this.chat.set('풍차', '풍차테스트다.');
    }
}