export class Popup{
    constructor(popupSelector){
        this._popup = popupSelector;
        this._buttonClose = this._popup.querySelector('.popup__close-cross');
        this.close = this.close.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(event){
        if (event.key === 'Escape'){
            //const openedPopup = document.querySelector('.popup_display_flex');
            this.close();
            }
    }

    setEventListeners(){
        this._buttonClose.addEventListener('click', this.close);
        document.addEventListener('keydown', this._handleEscClose);
    }

    open(){
        this._popup.classList.add('popup_display_flex');
        //this._popup.setEventListeners();
    }

    close(){
        this._popup.classList.remove('popup_display_flex');
        //document.removeEventListener('keydown', this._handleEscClose);
    }
}