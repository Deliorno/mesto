export const initialCards = [
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
export const popupProfile =  document.getElementById('popup_profile');
export const popupCard = document.querySelector('#popup_add');
export const nameInputVal = document.querySelector('#name');
export const jobInputVal = document.querySelector('#job');
export const addPlaceBtn = document.querySelector('.profile__add-btn');
export const settingsBtn = document.querySelector('.profile__settings');
export const galleryForClass = '.gallery';
export const placeInput = document.querySelector('#place');
export const linkInput = document.querySelector('#link');
export const popupCardSubmitBtn = popupCard.querySelector('.popup__btn');
export const popupImage = document.querySelector('#popup_image');
export const validationConfig = {
    formSelector: '.popup__card',
    inputSelector: '.popup__row',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    //inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__row-error_active'
  };
export const formAddPlace = document.querySelector('[name="profile-add-place"]');
export const fromSettings = document.querySelector('[name="profile-settings"]');