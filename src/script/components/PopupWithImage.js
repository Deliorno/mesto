import {Popup} from './Popup.js';
export class PopupWithImage extends Popup{
     constructor(popupSelector) {
         super(popupSelector);
         this._imageSelector = this._popup.querySelector('.popup__image');
         this._subtitleSelector = this._popup.querySelector('.popup__subtitle');
     }
     open(name, link){
        super.open();
        this._imageSelector.src = link;
        this._subtitleSelector.textContent = name;
     };
}