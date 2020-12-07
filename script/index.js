
let settings = document.querySelector('#settings');
const popup =  document.getElementById('popup');

const closeCross= document.querySelectorAll('.popup__close-cross');

let profileName = document.querySelector('#profile__name');
let nameInput = document.querySelector('#name');
let profileStatus = document.querySelector('#profile__status');
let popupCard= document.querySelector('#popup_add');
let nameInputVal = document.querySelector('#name');
let jobInputVal = document.querySelector('#job');
let jobInput = document.querySelector('#job');

const addPlaceBtn = document.querySelector('.profile__add-btn');
const settingsBtn = document.querySelector('.profile__settings');

let placeInput = document.querySelector('#place');
let linkInput = document.querySelector('#link');

let popupImage = document.querySelector('#popup_image');
let popupFullImage = popupImage.querySelector('.popup__image');
let popupSubtitle = popupImage.querySelector('.popup__subtitle');

const galleryTemplate = document.querySelector('#gallery_item').content;

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function GalleryItems() {
initialCards.forEach(item => {
    let galleryItem = galleryTemplate.cloneNode(true);
    console.log(item.name);
    console.log(item.link);

    galleryItem.querySelector('.gallery__item-pic').src = item.link;
    galleryItem.querySelector('.gallery__item-title').textContent = item.name;

    galleryItem.querySelector('.gallery__item-like').addEventListener('click', function() {
        let target = event.target;
        if (target.classList == "gallery__item-like"){
            target.classList.add("gallery__item-like_active");
        }else{
            target.classList.remove("gallery__item-like_active");
        } 
    });
    
    galleryItem.querySelector('.gallery__item-pic').addEventListener('click', function() {
        let target = event.target;
        if(target.classList == 'gallery__item-pic'){
            console.log("Nryek yf rfhnbyre");
            let subtitle = target.closest('.gallery__item').querySelector('.gallery__item-title').textContent;
            let image = target.closest('.gallery__item').querySelector('.gallery__item-pic').src;
            popupFullImage.src = image;
            popupSubtitle.textContent = subtitle;
            popupImage.classList.add('popup_display_flex');
        }
    });

    galleryItem.querySelector('.gallery__trash-bin').addEventListener('click', function() {
        let target = event.target;
        if(target.classList == 'gallery__trash-bin'){
            target.closest('.gallery__item').remove();
            initialCards.forEach(function(item,i) {
                if (item.name === target.closest('.gallery__item').querySelector('.gallery__item-title').textContent){
                    initialCards.splice(i,1);
                }
            })
        }
    });
    console.log(document.querySelector('.gallery'));
    document.querySelector('.gallery').append(galleryItem); 
});
};
GalleryItems();

function closeOpenPopup(){
    let target = event.target;
    if (target.classList == 'profile__add-btn'){
        popupCard.classList.add('popup_display_flex');
    }
    if (target.classList == 'profile__settings'){
        popup.classList.add('popup_display_flex');
    }
    if(target.closest('.popup')){
        target.closest('.popup').classList.remove('popup_display_flex');
    }

}

function addCardformSubmit (evt, name, link) {
    evt.preventDefault(); 
    
    let galleryItem = galleryTemplate.cloneNode(true);
    console.log(placeInput.value);
    console.log(linkInput.value);

    console.log(initialCards.length);
    
    initialCards.push({'name':placeInput.value,'link':linkInput.value});
    console.log(initialCards[length+1]);
    console.log(initialCards);

    galleryItem.querySelector('.gallery__item-pic').src = linkInput.value;
    galleryItem.querySelector('.gallery__item-title').textContent = placeInput.value;

    galleryItem.querySelector('.gallery__item-like').addEventListener('click', function() {
        let target = event.target;
        if (target.classList == "gallery__item-like"){
            target.classList.add("gallery__item-like_active");
        }else{
            target.classList.remove("gallery__item-like_active");
        } 
    });
    
    galleryItem.querySelector('.gallery__item-pic').addEventListener('click', function() {
        let target = event.target;
        if(target.classList == 'gallery__item-pic'){
            console.log("Nryek yf rfhnbyre");
            let subtitle = target.closest('.gallery__item').querySelector('.gallery__item-title').textContent;
            let image = target.closest('.gallery__item').querySelector('.gallery__item-pic').src;
            popupFullImage.src = image;
            popupSubtitle.textContent = subtitle;
            popupImage.classList.add('popup_display_flex');
        }
    });

    galleryItem.querySelector('.gallery__trash-bin').addEventListener('click', function() {
        let target = event.target;
        if(target.classList == 'gallery__trash-bin'){
            target.closest('.gallery__item').remove();
            initialCards.forEach(function(item,i) {
                if (item.name === target.closest('.gallery__item').querySelector('.gallery__item-title').textContent){
                    initialCards.splice(i,1);
                }
            })
        }
    });

    document.querySelector('.gallery').prepend(galleryItem); 
    popupCard.classList.remove('popup_display_flex');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInputVal.value;
    profileStatus.textContent = jobInputVal.value;
    popup.classList.remove('popup_display_flex');
    return false;
}

closeCross.forEach(item =>  {
    console.log(item);
   item.addEventListener('click',closeOpenPopup);
 });

popup.addEventListener('submit', formSubmitHandler); 
addPlaceBtn.addEventListener('click', closeOpenPopup);
settingsBtn.addEventListener('click', closeOpenPopup);
popupCard.addEventListener('submit', addCardformSubmit); 