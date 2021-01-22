//import initialCards from "./data.js"
//import {openPopup} from './index.js'
const popupImage = document.querySelector('#popup_image');
const popupImageClass = document.querySelector('.popup__image');
const subtitle = document.querySelector('.popup__subtitle');
export class Card {
    constructor(name, link, openPopup){
        this._name = name;
        this._link = link;
        this._openPopup = openPopup;
    }

    _getTemplate(){
        const galleryTemplate = document.querySelector('#gallery_item').content.cloneNode(true);
        return galleryTemplate;
    }

    renderCard(){
        this._element = this._getTemplate();

        // Добавим данные
        const pic = this._element.querySelector('.gallery__item-pic');
        pic.src = this._link;
        pic.alt = this._name;
        this._element.querySelector('.gallery__item-title').textContent = this._name;

        this._setEventListeners(pic);

        // - Вернём элемент наружу!
        return this._element;
        }

    _toogleLike(like){
        like.classList.toggle("gallery__item-like_active");
}

    _openImage(){
        popupImageClass.src = this._link;
        popupImageClass.alt = this._name;
        subtitle.textContent = this._name;
        this._openPopup(popupImage);
}

    _deleteImage(bin){
        bin.closest('.gallery__item').remove();
    }

    _setEventListeners(pic){
    this._element.querySelector('.gallery__item-like').addEventListener('click', () => {
        this._toogleLike(event.target);
      });

    pic.addEventListener('click', () => {
         this._openImage();
       });

    this._element.querySelector('.gallery__trash-bin').addEventListener('click',() => {
        this._deleteImage(event.target);
       });
    
    }
}