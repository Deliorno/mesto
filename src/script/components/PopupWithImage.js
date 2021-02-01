import {Popup} from './Popup.js';
export class PopupWithImage extends Popup{
     constructor(popupSelector, name, link) {
         super(popupSelector);
         this._name = name;
         this._link = link;
     }
     open(){
        this._popup.classList.add('popup_display_flex');
        console.log(this._link);
        console.log(this._name);
        this._popup.querySelector('.popup__image').src = this._link;
        this._popup.querySelector('.popup__subtitle').textContent = this._name;
     };
}