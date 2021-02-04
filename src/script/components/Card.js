export class Card {
    constructor(name, link, galleryTemplate, handleCardClick){
        this._name = name;
        this._link = link;
        this._openPic = handleCardClick;
        this._galTemplate = galleryTemplate;
    }

    _getTemplate(){
        return this._galTemplate.cloneNode(true);
    }

    renderCard(){
        this._element = this._getTemplate();

        // Добавим данные
        const pic = this._element.querySelector('.gallery__item-pic');
        pic.src = this._link;
        pic.alt = this._name;
        const subtitle = this._element.querySelector('.gallery__item-title');
        subtitle.textContent = this._name;

        this._setEventListeners(pic);
    
        // - Вернём элемент наружу!
        return this._element;
        }

    _toogleLike(like){
        like.classList.toggle("gallery__item-like_active");
}

    _deleteImage(bin){
        bin.closest('.gallery__item').remove();
    }

    _setEventListeners(pic){
    this._element.querySelector('.gallery__item-like').addEventListener('click', (evt) => {
        this._toogleLike(evt.target);
      });

    pic.addEventListener('click', () => {
         this._openPic(this._name, this._link);
       });

    this._element.querySelector('.gallery__trash-bin').addEventListener('click',(evt) => {
        this._deleteImage(evt.target);
       });
    
    }
}