const rootSelector = '[data-js-video-player]'; // глобальное объявление(в рамках файла) корневого селектора видеоплеера через который затем возможен сокращенный и понятный доступ к другим элементам

class VideoPlayer{
    selectors = {  // объект содержащий названия data атрибутов с помощью которых можно получить доступ к элементам DOM
        root: rootSelector,
        panel: '[data-js-video-player-panel]',
        video: '[data-js-video-player-video]',
        btn: '[data-js-video-player-btn]',
    }

    stateClasses = { // объект содержащий названия утилитарных классов которые отвечают за определенные состояния элементов которые будут изменяться в ответ на действия пользователя
        isActive: 'is-active',
    }

    constructor(rootEl){
        this.rootEl = rootEl; // корневой элемент конкретной группы видео
        this.playerBtn = this.rootEl.querySelector(this.selectors.btn); // группа кнопок переключения табов
        this.playerVideo = this.rootEl.querySelector(this.selectors.video); // группа видео
        this.playerPanel = this.rootEl.querySelector(this.selectors.panel);
        this.bindEvents()
    }

    onPlayBtnClick = () => {
        this.playerVideo.play();
        this.playerVideo.controls = true;
        this.playerPanel.classList.remove(this.stateClasses.isActive);
    }

    onVideoPause = () => {
        this.playerVideo.controls = false;
        this.playerPanel.classList.add(this.stateClasses.isActive);
    }

    bindEvents() {
        this.playerBtn.addEventListener('click', this.onPlayBtnClick);
        this.playerVideo.addEventListener('pause', this.onVideoPause);

    }    
}

class VideoPlayerCollection{
    constructor () {
        this.init()
    }

    init () {   
        document.querySelectorAll(rootSelector).forEach((element) => {
            new VideoPlayer(element) // передаем конкретный корневой элемент из группы видео на каждой итерации и создаем экземпляр запуская тем самым функцию конструктор которая заполнит переменные внутри класса VideoPlayer
        })
    }
}

export default VideoPlayerCollection;