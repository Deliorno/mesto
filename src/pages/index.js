 import './index.css';
 import {Popup} from '../script/components/Popup.js';
import {Card} from '../script/components/Card.js';
import {FormValidator} from '../script/components/FormValidator.js';
import {Section} from '../script/components/Section.js';
import {PopupWithForm} from '../script/components/PopupWithForm.js';
import {UserInfo} from '../script/components/UserInfo.js';
import {PopupWithImage} from '../script/components/PopupWithImage.js';
import {PopupWithConfirm} from '../script/components/PopupWithConfirm.js';
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
  profileName,
  profileStatus,
  profileImage,
  profileOverlay,
  popupRefreshAvatar,
  deleteCheckPopup,
  avatarInput,
  profileAvatar,
  formAvatar,
  apiConfig
} from '../script/utils/constants.js';

const api = new Api({
  urlCards:"https://mesto.nomoreparties.co/v1/cohort-20/cards/",
  urlUser:"https://mesto.nomoreparties.co/v1/cohort-20/users/me/",
  headers:{
    'content-type': 'application/json',
    'authorization':'cc284eaa-be85-4547-943e-099c0aa22925'
  }
})

const cardForm = new PopupWithForm (popupCard, addCardFormSubmit);
cardForm.setEventListeners();

const profileForm = new PopupWithForm(popupProfile, submitProfileForm);
profileForm.setEventListeners();

const avatarForm = new PopupWithForm(popupRefreshAvatar, submitAvatarForm)
avatarForm.setEventListeners();

const deleteForm = new PopupWithConfirm(deleteCheckPopup, cardDelete)
deleteForm.setEventListeners();

const setUserInfo = new UserInfo(profileName, profileStatus, profileAvatar, api);
setUserInfo.getUserInfo();
console.log(setUserInfo.getUserInfo().then())

const fullSizeImage = new PopupWithImage(popupImage);

const formRefreshAvatar = new FormValidator(formAvatar, validationConfig);
formRefreshAvatar.enableValidation();

const formNewPlace = new FormValidator(formAddPlace, validationConfig);
formNewPlace.enableValidation();

const formRefreshDescription = new FormValidator(fromSettings, validationConfig);
formRefreshDescription.enableValidation();

const avatarImage = document.querySelector('.profile__avatar');

let cardsFromData;
let userInfo;

Promise.all([api.getUserInfo(), api.getData()])
  .then(([userData, cardsData]) => {
    userInfo = userData;

    cardsFromData = new Section({
      items: cardsData,
      renderer: (item) => {
        //createCard(item);
        //console.log(item)
        cardsFromData.addItem(createCard(item, userData));
      }
    }, galleryForClass);
      cardsFromData.renderItems();
    //console.log(userData)
}).catch(err => console.log(`Ошибка загрузки данных: ${err}`));
 console.log(userInfo);

function createCard(item, userData){
  const card = new Card(item, userData, galleryTemplate, handleCardClick, deleteForm, api);
  //console.log(item._id)
  const cardElement = card.renderCard();
  return cardElement;
}

function addCardFormSubmit(inputs){
  cardForm._renderLoading(true);
  Promise.all([api.getUserInfo()])
  .then(([userData]) => {
    api
    .addNewCard(inputs)
    .then((inputs) => {
      cardsFromData.addItem(createCard(inputs, userData));
    })
    .finally(() => {
      cardForm._renderLoading(false);
      cardForm.close();})
}).catch(err => console.log(err));
}


function submitProfileForm(inputs) {
  profileForm._renderLoading(true);console.log(inputs)
  const refreshUserInfo = api
    .addUserInfo(inputs)
    .then((inputs) => {
      setUserInfo.setUserInfo(inputs);
    })
    .finally(() => {
      profileForm._renderLoading(false);
      profileForm.close();})
}

function submitAvatarForm(){
  avatarForm._renderLoading(true);
  const refreshAvatarImage = api
    .addAvatar(avatarInput.value)
    .then((avaInfo) => {
      profileAvatar.src = avaInfo.avatar;
    })
    .finally(() => {
      avatarForm._renderLoading(false);
      avatarForm.close();})

}

function cardDelete(cardId, api, bin){
  let o = cardId;
  let a = api;
  let b = bin;
  console.log(o,a,b)
  return o,a,b;
  //console.log(deleteForm.saveCardToDelete());
}
//cardDelete();
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

profileOverlay.addEventListener('click', function(){
  avatarForm.open();
  formRefreshAvatar.resetErrors();
}, false);

settingsBtn.addEventListener('click', function(){
  profileForm.open();
  setUserInfo.getUserInfo();
  formRefreshDescription.resetErrors();
}, false);

//document.querySelector('#yes_btn').addEventListener('click', cardDelete)


