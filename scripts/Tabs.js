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
        this.limitTabsIndex = this.tabBtnEls.length - 1; // лимит табов
        this.bindEvents()
    }

    onBtnClick(btnIndex) {
        
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
            new Tabs(element) // передаем конкретный корневой элемент из группы табов на каждой итерации
        })
    }
}

export default TabsCollection