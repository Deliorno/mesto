//import initialCards from "./data.js"
import {openPopup} from './index.js'
const popupImage = document.querySelector('#popup_image');
export class Card {
    constructor(name, link){
        this._name = name;
        this._link = link;
    }

    _getTemplate(){
    const galleryTemplate = document.querySelector('#gallery_item').content.cloneNode(true);
    return galleryTemplate;
    }

    renderCard(){
        this._element = this._getTemplate();
        this._setEventListeners();
        // Добавим данные
        this._element.querySelector('.gallery__item-pic').src = this._link;
        this._element.querySelector('.gallery__item-title').textContent = this._name;

        // - Вернём элемент наружу!
        // *интонация Куплина*
        // - Какая ружа? Ты посмотри там че происходит! 
        // Иди, говорит, наружу. Никакой ружи не будет.
        // - error message
        return this._element;
        }

    _toogleLike(like){
    like.classList.toggle("gallery__item-like_active");
}
    _openImage(){
    console.log(this._link)
    document.querySelector('.popup__image').src = this._link;
    document.querySelector('.popup__subtitle').textContent = this._name;
    openPopup(popupImage);
}
    _deleteImage(bin){
        bin.closest('.gallery__item').remove();
    }
    _setEventListeners(){
    this._element.querySelector('.gallery__item-like').addEventListener('click', () => {
       // console.log(event.target)
        this._toogleLike(event.target);
      });

    this._element.querySelector('.gallery__item-pic').addEventListener('click', () => {
        // console.log(event.target)
         this._openImage();
       });

    this._element.querySelector('.gallery__trash-bin').addEventListener('click',() => {
        this._deleteImage(event.target);
       });
    
    }
}

// initialCards.reverse().forEach(item => {
//     const card = new Card(item.name, item.link);
//     const galleryElement = card.renderCard();
//     console.log(galleryElement);
 
//    // Добавляем в DOM
//    document.querySelector('.gallery').prepend(galleryElement);
//  }); 