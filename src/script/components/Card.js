export class Card {
    constructor(name, link, likes, id, ownerId, userId, galleryTemplate, handleCardClick, deleteForm, api){
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._openPic = handleCardClick;
        this._galTemplate = galleryTemplate;
        this._ownerId = ownerId;
        this._userId = userId;
        this._cardId = id;
        this._api = api
        this.deleteForm = deleteForm;
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
        //console.log(this._likes.length)
        //console.log(this._ownerId)
        //console.log(this._userId)
        const subtitle = this._element.querySelector('.gallery__item-title');
        subtitle.textContent = this._name;

        if(this._ownerId != 'e8533cc4566da5704598188a'){
            this._element.querySelector('.gallery__trash-bin').style.display = 'none';
        }

        this._setEventListeners(pic, likesAmount, this._likes.length);
    
        // - Вернём элемент наружу!
        return this._element;
        }

    _toogleLike(like, likesAmount, countedLikes){
        if(like.classList == 'gallery__item-like'){
            like.classList.add("gallery__item-like_active");
            this._api
                .putLike(this._cardId)
                .then(response => {
                    likesAmount.textContent = response.likes.length;
                    //console.log(response)
                }
                    );
            //likesAmount.textContent = countedLikes + 1;
        } else {
            like.classList.remove("gallery__item-like_active");
            this._api
                .deleteLike(this._cardId)
                .then(response => {
                    likesAmount.textContent = response.likes.length;
                    //console.log(response)
                });
                
            //likesAmount.textContent = countedLikes;
        }
}

    _deleteImage(bin){
        //console.log(this._cardId)
        document.querySelector('#yes_btn').addEventListener('click', (evt)=>{
            this._api
                .deleteCard(this._cardId)
                .then(()=>bin.closest('.gallery__item').remove())
                .catch((err)=> console.log(err))
            
            this.deleteForm.close();
        })

    }

    _setEventListeners(pic, likesAmount, countedLikes){
    this._element.querySelector('.gallery__item-like').addEventListener('click', (evt) => {
        this._toogleLike(evt.target, likesAmount, countedLikes);
      });

    pic.addEventListener('click', () => {
         this._openPic(this._name, this._link);
       });

    this._element.querySelector('.gallery__trash-bin').addEventListener('click',(evt) => {
        //console.log(evt.target)
        this.deleteForm.open();
        this._deleteImage(evt.target);
       });
    
    }
}