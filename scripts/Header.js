class Header{
    selectors = {  // объект содержащий названия атрибутов с помощью которых можно получитб доступ к элементам DOM
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerBtn: '[data-js-burger-btn]'
    }

    stateClasses = { // объект содержащий названия утилитарных классов которые отвечают за определенные состояния элементов
        isActive: 'is-active',
        isLocked: 'is-locked',
    }

    constructor(){
        this.rootEl = document.querySelector(this.selectors.root);
        this.overlayEl = this.rootEl.querySelector(this.selectors.overlay);
        this.burgerBtnEl = this.rootEl.querySelector(this.selectors.burgerBtn)
        this.bindEvents()
    }

    onBurgerClick = () => {
        this.burgerBtnEl.classList.toggle(this.stateClasses.isActive);
        this.overlayEl.classList.toggle(this.stateClasses.isActive);
        document.documentElement.classList.toggle(this.stateClasses.isLocked);
    }

    bindEvents(){
        this.burgerBtnEl.addEventListener('click', this.onBurgerClick)
    }
}

export default Header