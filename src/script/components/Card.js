export class Card {
    constructor(item, userData, galleryTemplate, handleCardClick, api, funcDelete){
        this._name = item.name;
        this._link = item.link;
        this._likes = item.likes;
        this._openPic = handleCardClick;
        this._galTemplate = galleryTemplate;
        this._ownerId = item.owner._id;
        this._userId = userData._id;
        this._cardId = item._id;
        this._api = api
        this._funcDelete = funcDelete;
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
        const likesAmount = this._element.querySelector('.gallery__item-like-amount');
        likesAmount.textContent = this._likes.length;
        const subtitle = this._element.querySelector('.gallery__item-title');
        subtitle.textContent = this._name;
        
        if(this._ownerId != this._userId){
            this._element.querySelector('.gallery__trash-bin').style.display = 'none';
        }

        this._setEventListeners(pic, likesAmount, this._likes.length);

        this._likes.forEach((item) =>{
              if (item._id == this._userId){
                 this._element.querySelector('.gallery__item-like').classList.add("gallery__item-like_active");
              }
         })
    
        // - Вернём элемент наружу!
        return this._element;
        }

    _toogleLike(like, likesAmount, countedLikes){
        if(like.classList == 'gallery__item-like'){
            like.classList.add("gallery__item-like_active");
            this._api
                .putLike(this._cardId)
                .then(response => {
                    console.log(response.likes)
                    likesAmount.textContent = response.likes.length;
                }
                    );
        } else {
            like.classList.remove("gallery__item-like_active");
            this._api
                .deleteLike(this._cardId)
                .then(response => {
                    likesAmount.textContent = response.likes.length;
                    console.log(response)
                });
        }
    }

    _deleteImage(bin){
        this._funcDelete(bin, this._cardId);
    }

    _setEventListeners(pic, likesAmount, countedLikes){
        this._element.querySelector('.gallery__trash-bin').addEventListener('click',(evt) => {
            this._deleteImage(evt.target);
           });

        this._element.querySelector('.gallery__item-like').addEventListener('click', (evt) => {
            this._toogleLike(evt.target, likesAmount, countedLikes);
        });

        pic.addEventListener('click', () => {
            this._openPic(this._name, this._link);
        });
        
    }
}