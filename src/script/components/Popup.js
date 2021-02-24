export class Popup{
    constructor(popupSelector){
        this._popup = popupSelector;
        this._buttonClose = this._popup.querySelector('.popup__close-cross');
        this.close = this.close.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._overlayCLose = this._overlayCLose.bind(this);
    }

    _handleEscClose(event){
        if (event.key === 'Escape'){
            this.close();
            }
    }

    _overlayCLose(event){
        if (event.target === this._popup){
            this.close();
        }
    }

    setEventListeners(){
        this._buttonClose.addEventListener('click', this.close);
    }

    open(){
        this._popup.classList.add('popup_display_flex');
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('click', this._overlayCLose);
    }

    close(){
        this._popup.classList.remove('popup_display_flex');
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('click', this._overlayCLose);
    }
}