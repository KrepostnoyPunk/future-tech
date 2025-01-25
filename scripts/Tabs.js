const rootSelector = '[data-js-tabs]'; // глобальное объявление(в рамках файла) корневого селектора группы табов

class Tabs{
    selectors = {  // объект содержащий названия data атрибутов с помощью которых можно получить доступ к элементам DOM
        root: rootSelector,
        btn: '[data-js-tabs-btn]',
        tab: '[data-js-tabs-tab]',
    }

    stateClasses = { // объект содержащий названия утилитарных классов которые отвечают за определенные состояния элементов которые будут изменяться в ответ на действия пользователя
        isActive: 'is-active',
    }

    stateAttributes = { // объект содержащий названия аттрибутов которые отвечают за определенные состояния элементов которые будут изменяться в ответ на действия пользователя
        ariaSelected: 'aria-selected',
        tabIndex: 'tabindex',
    }

    constructor(rootEl){
        this.rootEl = rootEl; // корневой элемент конкретной группы табов
        this.tabBtnEls = this.rootEl.querySelectorAll(this.selectors.btn); // группа кнопок переключения табов
        this.tabEls = this.rootEl.querySelectorAll(this.selectors.tab); // группа табов с контентом
        this.state = { // объект хранящий индекс текущей активной кнопки табов
            activeIndex: [...this.tabBtnEls].findIndex((btnEl) => btnEl.classList.contains(this.stateClasses.isActive))
        }
        this.bindEvents()
    }

    updateUI() {
        const {activeIndex} = this.state;

        this.tabBtnEls.forEach((btnEl, index) => {
            const isActive = index === activeIndex;

            btnEl.classList.toggle(this.stateClasses.isActive, isActive) // предыдущая активная кнопка перестает быть таковой при нажатии на другую
            btnEl.setAttribute(this.stateAttributes.ariaSelected, isActive)
            btnEl.setAttribute(this.stateAttributes.tabIndex, isActive ? '0' : '-1')
        })

        this.tabEls.forEach((tabEl, index) => {
            const isActive = index === activeIndex;

            tabEl.classList.toggle(this.stateClasses.isActive, isActive)
        })
    }

    onBtnClick(btnIndex) {
        this.state.activeIndex = btnIndex;
        this.updateUI()
    }

    bindEvents() {
        this.tabBtnEls.forEach((btnEl, index) => {
            btnEl.addEventListener('click', () => {
                this.onBtnClick(index)
            })
        })
    }    
}

class TabsCollection{
    constructor () {
        this.init()
    }

    init () {   
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Tabs(element) // передаем конкретный корневой элемент из группы табов на каждой итерации и создаем экземпляр запуская тем самым функцию конструктор которая заполнит переменные внутри класса Tabs
        })
    }
}

export default TabsCollection