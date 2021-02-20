 import './index.css';
 import {Popup} from '../script/components/Popup.js';
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

const deleteForm = new Popup(deleteCheckPopup)
deleteForm.setEventListeners();

const setUserInfo = new UserInfo(nameInputVal, jobInputVal);

const fullSizeImage = new PopupWithImage(popupImage);

const formRefreshAvatar = new FormValidator(formAvatar, validationConfig);
formRefreshAvatar.enableValidation();

const formNewPlace = new FormValidator(formAddPlace, validationConfig);
formNewPlace.enableValidation();

const formRefreshDescription = new FormValidator(fromSettings, validationConfig);
formRefreshDescription.enableValidation();

const apiData = api
  .getData()
  .then((cardsData) => {
    const cardsFromData = new Section({
    items: cardsData,
    renderer: (item) => {
      createCard(item);
      cardsFromData.addItem(createCard(item));
    }
  }, galleryForClass);
    cardsFromData.renderItems();
  })

  const avatarImage = document.querySelector('.profile__avatar');
const apiUser = api
  .getUserInfo()
  .then((userData) => {
    avatarImage.src = userData.avatar;
    profileName.textContent= userData.name;
    profileStatus.textContent= userData.about;
})

const cardsFromData = new Section({
    items: initialCards,
    renderer: (item) => {
      createCard(item);
      cardsFromData.addItem(createCard(item));
    }
}, galleryForClass);

function createCard(item){
  //console.log(apiUser._id)
  const card = new Card(item.name, item.link, item.likes, item._id, item.owner._id, apiUser._id, galleryTemplate, handleCardClick, deleteForm, api);
  console.log(item._id)
  const cardElement = card.renderCard();
  return cardElement;
}

function addCardFormSubmit(inputs){
  cardForm._renderLoading(true);
  const addNewCard = api
    .addNewCard(cardForm._getInputValues())
    .then((cardsData) => {
      cardsFromData.addItem(createCard(cardsData));
    })
    .finally(() => {
      cardForm._renderLoading(false);
      cardForm.close();})
}

function submitProfileForm() {
  profileForm._renderLoading(true);
  const refreshUserInfo = api
    .addUserInfo(setUserInfo.setUserInfo())
    .then((userData) => {
      profileName.textContent= userData.name;
      profileStatus.textContent= userData.about;
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

function cardDelete(cardId, bin){
  // deleteForm.open();
  // console.log(deleteForm);
  // console.log(cardId)
  // deleteYesBtn.addEventListener('click', (evt)=>{
  //     evt.preventDefault;
  //     this._api
  //         .deleteCard(cardId)
  //         .then(()=>{
  //           bin.closest('.gallery__item').remove();
  //           deleteForm.close();
  //         })
  //         .catch((err)=> console.log(err))
  //     //bin.closest('.gallery__item').remove();
  // })
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

profileOverlay.addEventListener('click', function(){
  avatarForm.open();
  formRefreshAvatar.resetErrors();
}, false);

settingsBtn.addEventListener('click', function(){
  profileForm.open();
  setUserInfo.getUserInfo();
  formRefreshDescription.resetErrors();
}, false);


