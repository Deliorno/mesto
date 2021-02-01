import {Popup} from './Popup.js';
export class PopupWithForm extends Popup{
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._buttonSubmit = this._popup.querySelector('.popup__btn');
        this._submit = formSubmit;
        this._form = this._popup.querySelector('.popup__card');
        this._inputList = this._form.querySelectorAll('.popup__row');
    }

    _getInputValues(){
        //элементы полей

        this._inputs = {}
        this._inputList.forEach(input =>{
            this._inputs[input.name] = input.value;
        })
        return this._inputs;
    }

    close(){
        super.close();
    
        this._inputList.forEach(input =>{
            input.textContent = '';
        })
    }

    setEventListeners(){
        super.setEventListeners();
        this._buttonSubmit.addEventListener('click', (evt)=>{
            evt.preventDefault();
            this.close();
            this._submit(this._getInputValues());
        });
    }
}