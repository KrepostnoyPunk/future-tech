const rootSelector = '[data-js-input-mask]';

class InputMask{
    constructor(rootEl){
        this.rootEl = rootEl;

        this.init()
    }

    init() {
        const isLibraryReady = typeof window.IMask !== "undefined"; // если библиотека правильно загружена и доступна глобально, то

        if(isLibraryReady){
            window.IMask(this.rootEl, {
                mask: this.rootEl.dataset.jsInputMask
              })
        } else {
            console.error('"IMask" library is not loaded properly.')
        }
    }    
}

class InputMaskCollection{
    constructor () {
        this.init()
    }

    init () {   
        document.querySelectorAll(rootSelector).forEach((element) => {
            new InputMask(element)
        })
    }
}

export default InputMaskCollection