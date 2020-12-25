const popupProfile =  document.getElementById('popup_profile');

const closeCross= document.querySelectorAll('.popup__close-cross');

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

function galleryItems() {
initialCards.reverse().forEach(item => {
    addCardOnPage(item.link, item.name);
    });
};

galleryItems();

function openPopup(openedPopup){
    openedPopup.classList.add('popup_display_flex');
    document.addEventListener('keydown', closeByEscape);
    openedPopup.addEventListener('mousedown', closeByOutside);
}

function closePopup(openedPopup){
    openedPopup.classList.remove('popup_display_flex');
    document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(event){
    if (event.key === 'Escape'){
        const openedPopup = document.querySelector('.popup_display_flex');
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
    closePopup(popupCard);
}

function addCardOnPage(link, name){
    galleryContainer.prepend(createCard (link, name));
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
    popupCardSubmitBtn.classList.add('.popup__btn_disabled');
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