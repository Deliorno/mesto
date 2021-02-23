import {Popup} from './Popup.js';
export class PopupWithConfirm extends Popup{
    constructor(popupSelector, cardDelete) {
        super(popupSelector);
        this._buttonSubmit = this._popup.querySelector('.popup__btn');
        this._form = this._popup.querySelector('.popup__card');
        this._submit = cardDelete;
        this._saveCardToDelete = this.saveCardToDelete.bind(this);
        this.api;
    }

    close(){
        super.close();
    }

    getCardToDelete(cardId, api, bin){
       // console.log(cardId, api, bin)
        let o = cardId;
        let a = api;
        let b = bin;
        this._submit(cardId, api, bin);
        this.saveCardToDelete(cardId, api, bin);
    }

    saveCardToDelete(cardId, api, bin){
        let o = cardId;
        this.api = api;
        let b = bin;
        console.log(o,this.api,b)
        this._submit();
        return o, this.api, b;
    }

    deleteConfirmed(){
        console.log(this._saveCardToDelete());
        api
                .deleteCard(cardId)
                .then(()=>bin.closest('.gallery__item').remove())
                .catch((err)=> console.log(err))
            this.deleteForm.close();
    }

    setEventListeners(){
        super.setEventListeners();
        // this._buttonSubmit.addEventListener('click', (evt)=>{
        //     evt.preventDefault();
        //     //console.log(this._saveCardToDelete())
        //     this.deleteConfirmed();
        //     //this.close();
        // });
    }
}