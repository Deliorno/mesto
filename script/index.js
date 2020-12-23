const popup_profile =  document.getElementById('popup_profile');

//const closeCross= document.querySelectorAll('.popup__close-cross');

const profileName = document.querySelector('#profile__name');
const profileStatus = document.querySelector('#profile__status');
const popupCard= document.querySelector('#popup_add');
const nameInputVal = document.querySelector('#name');
const jobInputVal = document.querySelector('#job');
const popupSubmit = document.querySelectorAll('.popup__btn');

const addPlaceBtn = document.querySelector('.profile__add-btn');
const settingsBtn = document.querySelector('.profile__settings');

const placeInput = document.querySelector('#place');
const linkInput = document.querySelector('#link');

const popupImage = document.querySelector('#popup_image');
const popupFullImage = popupImage.querySelector('.popup__image');
const popupSubtitle = popupImage.querySelector('.popup__subtitle');

const galleryContainer = document.querySelector(".gallery");
const galleryTemplate = document.querySelector('#gallery_item').content;

//Что? как вынести в отдельный файл?
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
    addCardOnPage(item.link, item.name);
    });
};

galleryItems();

function openPopup(openedPopup){
    openedPopup.classList.add('popup_display_flex');
    const closeOpenedPopUp = openedPopup.querySelector('.popup__close-cross');
    const closeOnSubmit = openedPopup.querySelector('.popup__btn');
    closeOpenedPopUp.addEventListener('click', function(){
        closePopup(openedPopup);
    })
    if (closeOnSubmit != null){
        closeOnSubmit.addEventListener('click', function(){
            closePopup(openedPopup);
        })
    }
    document.addEventListener('keydown', closeByEscape);
    openedPopup.addEventListener('mousedown', closeByOutside);
}

function closePopup(openedPopup){
    openedPopup.classList.remove('popup_display_flex');
    document.removeEventListener('keyup', closeByEscape);
    document.removeEventListener('keyup', closeByEscape);
}

function closeByEscape(event){
    if (event.key === 'Escape'){
        const openedPopup = document.querySelector('.popup_display_flex'); //никогда бы не догадалась искать по открытому попАпу =_=
        closePopup(openedPopup);
        }
}
function closeByOutside(event){
    const openedPopup = document.querySelector('.popup_display_flex'); 
    if(openedPopup != null){
        if (event.target === openedPopup.closest('.popup')){
            closePopup(openedPopup);
            }
        }
}

function createCard (link, name) {
    const galleryItem = galleryTemplate.cloneNode(true);
    const picture = galleryItem.querySelector('.gallery__item-pic');
    picture.src = link;//linkInput.value;
    picture.alt = name;
    galleryItem.querySelector('.gallery__item-title').textContent = name;//placeInput.value;

    galleryItem.querySelector('.gallery__item-like').addEventListener('click', function(evt) {
        evt.target.classList.toggle("gallery__item-like_active");
    });
    
    picture.addEventListener('click', function(evt) {
            const subtitle = evt.target.closest('.gallery__item').querySelector('.gallery__item-title').textContent;
            const image = evt.target.closest('.gallery__item').querySelector('.gallery__item-pic').src;
            popupFullImage.src = image;
            popupSubtitle.textContent = subtitle;
            openPopup(popupImage);
    });

    galleryItem.querySelector('.gallery__trash-bin').addEventListener('click', function(evt) {
        evt.target.closest('.gallery__item').remove();
    });

    return galleryItem;
}

function addCardFormSubmit(evt){
    evt.preventDefault(); 
    addCardOnPage(linkInput.value, placeInput.value);
}

function addCardOnPage(link, name){
    galleryContainer.prepend(createCard (link, name));
}

function submitProfileForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInputVal.value;
    profileStatus.textContent = jobInputVal.value;
}

// closeCross.forEach(item =>  {
//    item.addEventListener('click',closePopup);
//  });
 
popup_profile.addEventListener('submit', submitProfileForm); 

addPlaceBtn.addEventListener('click', function(){
    popupCard.querySelector('.popup__btn').setAttribute('disabled', 'disabled');
    placeInput.value = '';
    linkInput.value = '';
    openPopup(popupCard);
}, false);
settingsBtn.addEventListener('click', function(){
    nameInputVal.value = profileName.textContent;
    jobInputVal.value = profileStatus.textContent;
    openPopup(popup_profile);
}, false);
popupCard.addEventListener('submit', addCardFormSubmit);