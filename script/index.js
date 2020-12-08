const popup =  document.getElementById('popup');

const closeCross= document.querySelectorAll('.popup__close-cross');

const profileName = document.querySelector('#profile__name');
const nameInput = document.querySelector('#name');
const profileStatus = document.querySelector('#profile__status');
const popupCard= document.querySelector('#popup_add');
const nameInputVal = document.querySelector('#name');
const jobInputVal = document.querySelector('#job');
const jobInput = document.querySelector('#job');

const addPlaceBtn = document.querySelector('.profile__add-btn');
const settingsBtn = document.querySelector('.profile__settings');

const placeInput = document.querySelector('#place');
const linkInput = document.querySelector('#link');

const popupImage = document.querySelector('#popup_image');
const popupFullImage = popupImage.querySelector('.popup__image');
const popupSubtitle = popupImage.querySelector('.popup__subtitle');

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

function galleryItems() {
initialCards.reverse().forEach(item => {
    addCard(item.link,item.name)
    });
};

galleryItems();

function addCardFormSubmit(evt){
    evt.preventDefault(); 
    addCard(linkInput.value, placeInput.value);
    closePopup();
    //initialCards.push({'name': placeInput.value,'link':linkInput.value});
}

function openPopup(evt, popupOpen = event.target){
    if (popupOpen.classList == 'profile__add-btn'){
        popupCard.classList.add('popup_display_flex');
    }
    if (popupOpen.classList == 'profile__settings'){
        popup.classList.add('popup_display_flex');
    }
    if (popupOpen.classList == 'gallery__item-pic'){
        popupImage.classList.add('popup_display_flex');
    }
}

function closePopup(evt, pupClose = event.target){
    if(pupClose.closest('#popup')){
        pupClose.closest('#popup').classList.remove('popup_display_flex');
    }
    if(pupClose.closest('#popup_image')){
        pupClose.closest('#popup_image').classList.remove('popup_display_flex');
    }
    if(pupClose.closest('#popup_add')){
        pupClose.closest('#popup_add').classList.remove('popup_display_flex');
    }
}

function addCard (link, name) {
    const galleryItem = galleryTemplate.cloneNode(true);

    galleryItem.querySelector('.gallery__item-pic').src = link;//linkInput.value;
    galleryItem.querySelector('.gallery__item-title').textContent = name;//placeInput.value;

    galleryItem.querySelector('.gallery__item-like').addEventListener('click', function() {
        let target = event.target;
        target.classList.toggle("gallery__item-like_active");
    });
    
    galleryItem.querySelector('.gallery__item-pic').addEventListener('click', function() {
        let target = event.target;
            const subtitle = target.closest('.gallery__item').querySelector('.gallery__item-title').textContent;
            const image = target.closest('.gallery__item').querySelector('.gallery__item-pic').src;
            popupFullImage.src = image;
            popupSubtitle.textContent = subtitle;
            openPopup()
    });

    galleryItem.querySelector('.gallery__trash-bin').addEventListener('click', function() {
        let target = event.target;
            target.closest('.gallery__item').remove();
            // initialCards.forEach(function(item,i) {
            //     if (item.name === target.closest('.gallery__item').querySelector('.gallery__item-title').textContent){
            //         initialCards.splice(i,1);
            //     }
            // })
    });

    document.querySelector('.gallery').prepend(galleryItem); 
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInputVal.value;
    profileStatus.textContent = jobInputVal.value;
    closePopup();
}

closeCross.forEach(item =>  {
   item.addEventListener('click',closePopup);
 });

popup.addEventListener('submit', formSubmitHandler); 

addPlaceBtn.addEventListener('click', openPopup);
settingsBtn.addEventListener('click', openPopup);
popupCard.addEventListener('submit', addCardFormSubmit); 