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
        console.log(this._form)
        this._inputs = {}
        this._inputList.forEach(input =>{
            this._inputs[input.name] = input.value;
        })
        //console.log(this._inputs.place, this._inputs.link)
        return this._inputs;
    }

    _renderLoading(isLoading){
        if (isLoading){
            //console.log(isLoading)
            this._buttonSubmit.textContent = 'Сохранение..'
          //content.classList.add('content_hidden');
        } else {
           // console.log(isLoading)
            this._buttonSubmit.textContent = 'Сохранить'
        }
      }

    close(){
        super.close();
    
        this._form.reset();
        // this._inputList.forEach(input =>{
        //     input.textContent = '';
        // })
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt)=>{
            evt.preventDefault();
            this._submit(this._getInputValues());
            //this.close();
        });
    }
}