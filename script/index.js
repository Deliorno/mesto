import {Card} from './components/Card.js';
import {FormValidator} from './components/FormValidator.js';
import {Section} from './components/Section.js';
import {PopupWithForm} from './components/PopupWithForm.js';
import {UserInfo} from './components/UserInfo.js';
import {PopupWithImage} from './components/PopupWithImage.js';
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
  initialCards
} from './utils/constants.js';
const setUserInfo = new UserInfo(nameInputVal, jobInputVal);

const formNewPlace = new FormValidator(formAddPlace, validationConfig);
formNewPlace.enableValidation();

const formRefreshDescription = new FormValidator(fromSettings, validationConfig);
formRefreshDescription.enableValidation();

const cardsFromData = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, handleCardClick);
      const cardElement = card.renderCard();
      cardsFromData.addItem(cardElement);
    }
  }, galleryForClass);

  cardsFromData.renderItems();

function addCardFormSubmit(inputs){
    const cardsFromFrom = new Section({
        items: [{name:inputs.place,link:inputs.link}],
        renderer: (item) => {
            const card = new Card(item.name, item.link, handleCardClick);
          const cardElement = card.renderCard();
          cardsFromFrom.addItem(cardElement);
        }
      }, galleryForClass);
    cardsFromFrom.renderItems();
}

function submitProfileForm () {
  setUserInfo.setUserInfo();
}

function handleCardClick(name, link){
  const fullSizeImage = new PopupWithImage(popupImage, name, link);
      fullSizeImage.open();
      fullSizeImage.setEventListeners();
}

addPlaceBtn.addEventListener('click', function(){
    popupCardSubmitBtn.setAttribute('disabled', 'disabled');
    popupCardSubmitBtn.classList.add('popup__btn_disabled');
    placeInput.value = '';
    linkInput.value = '';
    formNewPlace._resetErrors();
    const inputs= new PopupWithForm (popupCard, addCardFormSubmit);
    inputs.setEventListeners();
    inputs.open();
}, false);

settingsBtn.addEventListener('click', function(){
    const openPopup = new PopupWithForm(popupProfile, submitProfileForm);
    openPopup.setEventListeners();
    openPopup.open();
    setUserInfo.getUserInfo();
}, false);
