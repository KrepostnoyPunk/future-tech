import pxToRem from "./utils/pxToRem.js";

const rootSelector = '[data-js-expandable-content]';

class ExpandableContent{
    selectors = {  
        root: rootSelector,
        btn: '[data-js-expandable-content-btn]',
    }

    stateClasses = { 
        isExpanded: 'is-expanded',
    }

    animationParams = {
        duration: 500,
        easing: 'ease',
    }

    constructor(rootEl){
        this.rootEl = rootEl; 
        this.expandBtn = this.rootEl.querySelector(this.selectors.btn);

        this.bindEvents()
    }

    onExpandBtnClick = () => {
        const {offsetHeight, scrollHeight} = this.rootEl;

        this.rootEl.classList.add(this.stateClasses.isExpanded);
        this.expandBtn.classList.add(this.stateClasses.isExpanded);

        this.rootEl.animate([ // метод позволяющий задать CSS анимацию элементу
            {
                maxHeight: `${pxToRem(offsetHeight)}rem`, // начальный кадр анимации
            },
            {
                maxHeight: `${pxToRem(scrollHeight)}rem`, // конечный кадр анимации
            },
        ], this.animationParams); // объект с параметрами анимации
    }

    bindEvents() {
        this.expandBtn.addEventListener('click', this.onExpandBtnClick);
    }    
}

class ExpandableContentCollection{
    constructor () {
        this.init()
    }

    init () {   
        document.querySelectorAll(rootSelector).forEach((element) => {
            new ExpandableContent(element)
        })
    }
}

export default ExpandableContentCollection