import {Popup} from './Popup.js';
export class PopupWithConfirm extends Popup{
    constructor(popupSelector, bin, cardId, api) {
        super(popupSelector);
        this._buttonSubmit = this._popup.querySelector('.popup__btn');
        this._form = this._popup.querySelector('.popup__card');
        this.api = api;
        this.bin = bin;
        this.cardId = cardId;
        this.deleteConfirmed = this.deleteConfirmed.bind(this);
    }

    close(){
        super.close();
        this._buttonSubmit.removeEventListener('click', this.deleteConfirmed);
    }

    open(){
        super.open();
    }

    deleteConfirmed(){   
        console.log('Дел');
        console.log(this.bin, this.cardId, this.api);
        this._renderLoading(true);
            this.api
                .deleteCard(this.cardId)
                .then(()=>{
                    this.bin.closest('.gallery__item').remove();
                    this.close();
                    this._buttonSubmit.removeEventListener('click', this.deleteConfirmed);   
            })
                .catch((err)=> console.log(err))
                .finally(() => {
                    this._renderLoading(false);})
    }

    _renderLoading(isLoading){
        if (isLoading){
            this._buttonSubmit.textContent = 'Удаление..'
        } else {
            console.log(isLoading)
            this._buttonSubmit.textContent = 'Да'
        }
      }

    deleteConfirm(){
        this.open();
        this._buttonSubmit.addEventListener('click', this.deleteConfirmed);
    }

    setEventListeners(){
        super.setEventListeners();
    }
}