import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js'
const popupProfile =  document.getElementById('popup_profile');

const closeCross= document.querySelectorAll('.popup__close-cross');

const profileName = document.querySelector('#profile__name');
const profileStatus = document.querySelector('#profile__status');
const popupCard= document.querySelector('#popup_add');
const nameInputVal = document.querySelector('#name');
const jobInputVal = document.querySelector('#job');

const addPlaceBtn = document.querySelector('.profile__add-btn');
const settingsBtn = document.querySelector('.profile__settings');

const gallery = document.querySelector('.gallery');

const placeInput = document.querySelector('#place');
const linkInput = document.querySelector('#link');
const formNewPlace = new FormValidator(document.querySelector('[name="profile-add-place"]'));
formNewPlace.enableValidation();
const formRefreshDescription = new FormValidator(document.querySelector('[name="profile-settings"]'));
formRefreshDescription.enableValidation();

function createCard(name, link){
    const card = new Card(name, link);
    return card;
}

 function renderGalleryItems() {
 initialCards.reverse().forEach(item => {
    //const card = new Card(item.name, item.link);
     addCardOnPage(createCard(item.name, item.link));
     });
 };

 renderGalleryItems();

export function openPopup(openedPopup){
    document.querySelector('#popup_btn').classList.remove('popup__btn_disabled');
    const error = Array.from(document.querySelectorAll('.popup__row-error'));
    error.forEach((err) => {
            err.textContent='';
      });

    openedPopup.classList.add('popup_display_flex');
    document.addEventListener('keydown', closeByEscape);
    openedPopup.addEventListener('mousedown', closeByOutside);
}

function closePopup(openedPopup){
    openedPopup.classList.remove('popup_display_flex');
    document.removeEventListener('keydown', closeByEscape);
    openedPopup.removeEventListener('mousedown', closeByOutside);
}

function closeByEscape(event){
    if (event.key === 'Escape'){
        const openedPopup = document.querySelector('.popup_display_flex');
        closePopup(openedPopup);
        }
}
function closeByOutside(event){
    const openedPopup = document.querySelector('.popup_display_flex');
        if (event.target === openedPopup.closest('.popup')){
            closePopup(openedPopup);
            }
}

function addCardFormSubmit(evt){
    evt.preventDefault();
    addCardOnPage(createCard(item.name, item.link));
    closePopup(popupCard);
}

function addCardOnPage(card){
    const galleryElement = card.renderCard();
    gallery.prepend(galleryElement);
}

function submitProfileForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInputVal.value;
    profileStatus.textContent = jobInputVal.value;
    closePopup(popupProfile);
}

closeCross.forEach(item =>  {
   item.addEventListener('click',function(){
    const openedPopup = document.querySelector('.popup_display_flex');
       closePopup(openedPopup);
   });
  });
 
popupProfile.addEventListener('submit', submitProfileForm); 

addPlaceBtn.addEventListener('click', function(){
    const popupCardSubmitBtn = popupCard.querySelector('.popup__btn');
    popupCardSubmitBtn.setAttribute('disabled', 'disabled');
    popupCardSubmitBtn.classList.add('popup__btn_disabled');
    placeInput.value = '';
    linkInput.value = '';
    openPopup(popupCard);
}, false);
settingsBtn.addEventListener('click', function(){
    nameInputVal.value = profileName.textContent;
    jobInputVal.value = profileStatus.textContent;
    openPopup(popupProfile);
}, false);
popupCard.addEventListener('submit', addCardFormSubmit);