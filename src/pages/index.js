 import './index.css';
import {Card} from '../script/components/Card.js';
import {FormValidator} from '../script/components/FormValidator.js';
import {Section} from '../script/components/Section.js';
import {PopupWithForm} from '../script/components/PopupWithForm.js';
import {UserInfo} from '../script/components/UserInfo.js';
import {PopupWithImage} from '../script/components/PopupWithImage.js';
import {Api} from '../script/components/Api.js';
import {
  popupProfile,
  popupCard,
  nameInputVal,
  jobInputVal,
  addPlaceBtn,
  settingsBtn,
  galleryForClass,
  placeInput,
  linkInput,
  popupCardSubmitBtn,
  popupImage,
  validationConfig,
  formAddPlace,
  fromSettings,
  initialCards,
  galleryTemplate,
  apiConfig
} from '../script/utils/constants.js';

const api = new Api({
  url:"https://mesto.nomoreparties.co/v1/cohort-20/cards",
  headers:{
    'content-type': 'application/json',
    'authorization':'cc284eaa-be85-4547-943e-099c0aa22925'
  }
})

const task = api.getData();

task
  .then((result) => {
  console.log(result);
})



const cardForm = new PopupWithForm (popupCard, addCardFormSubmit);
cardForm.setEventListeners();

const profileForm = new PopupWithForm(popupProfile, submitProfileForm);
profileForm.setEventListeners();

const setUserInfo = new UserInfo(nameInputVal, jobInputVal);

const fullSizeImage = new PopupWithImage(popupImage);

const formNewPlace = new FormValidator(formAddPlace, validationConfig);
formNewPlace.enableValidation();

const formRefreshDescription = new FormValidator(fromSettings, validationConfig);
formRefreshDescription.enableValidation();

function createCard(item){
  const card = new Card(item.name, item.link, galleryTemplate, handleCardClick);
  const cardElement = card.renderCard();
  return cardElement;
}
  

const cardsFromData = new Section({
    items: initialCards,
    renderer: (item) => {
      createCard(item);
      cardsFromData.addItem(createCard(item));
    }
  }, galleryForClass);

  cardsFromData.renderItems();

  function addCardFormSubmit(inputs){
    console.log(createCard(inputs))
    cardsFromData.addItem(createCard(inputs));
}

function submitProfileForm () {
  setUserInfo.setUserInfo();
}

function handleCardClick(name, link){
      fullSizeImage.open(name, link);
      fullSizeImage.setEventListeners();
}

addPlaceBtn.addEventListener('click', function(){
    popupCardSubmitBtn.setAttribute('disabled', 'disabled');
    popupCardSubmitBtn.classList.add('popup__btn_disabled');
    cardForm.open();
    formNewPlace.resetErrors();
}, false);

settingsBtn.addEventListener('click', function(){
    profileForm.open();
    setUserInfo.getUserInfo();
    formRefreshDescription.resetErrors();
}, false);
