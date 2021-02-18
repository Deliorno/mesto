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
export const popupCardSubmitBtn = document.querySelector('#popup_add_btn');
export const popupImage = document.querySelector('#popup_image');
export const validationConfig = {
    formSelector: '.popup__card',
    inputSelector: '.popup__row',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    //inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__row-error_active'
  };
export const apiConfig = {
    url: ''
}
export const formAddPlace = document.querySelector('[name="profile-add-place"]');
export const fromSettings = document.querySelector('[name="profile-settings"]');
export const galleryTemplate = document.querySelector('#gallery_item').content;
export const profileName = document.querySelector('#profile__name');
export const profileStatus = document.querySelector('#profile__status');
export const profileImage = document.querySelector('.profile__avatar');
export const profileOverlay = document.querySelector('.profile__avatar-overlay');
export const popupRefreshAvatar = document.querySelector('#popup_refresh_avatar');
export const deleteCheckPopup = document.querySelector('#delete_check');
export const avatarInput = document.querySelector('#avatar');
export const profileAvatar = document.querySelector('.profile__avatar');
export const formAvatar = document.querySelector('[name="profile-avatar"]');
