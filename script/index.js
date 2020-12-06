
let settings = document.querySelector('#settings');
let popup =  document.getElementById('popup');
let closeBtn = document.querySelector('.popup__close-cross');
let profileName = document.querySelector('#profile__name');
let nameInput = document.querySelector('#name');
let profileStatus = document.querySelector('#profile__status');
let popupCard= document.querySelector('#popup_add');
let nameInputVal = document.querySelector('#name');
let jobInputVal = document.querySelector('#job');
let jobInput = document.querySelector('#job');
let addPlaceBtn = document.querySelector('#add_btn');
let addPlacePopup = document.querySelector('#popup_add');
let addCloseBtn = document.querySelector('#close-cross');

let placeInput = document.querySelector('#place');
let linkInput = document.querySelector('#link');

let popupImage = document.querySelector('.popup-image');
let popupFullImage = popupImage.querySelector('.popup-image__image');
let popupSubtitle = popupImage.querySelector('.popup-image__subtitle');


const galleryTemplate = document.querySelector('#gallery_item').content;
console.log(galleryTemplate);

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
function GalleryItems() {
initialCards.forEach(item => {
    let galleryItem = galleryTemplate.cloneNode(true);
    console.log(item.name);
    console.log(item.link);
    galleryItem.querySelector('.gallery__item-pic').src = item.link;

    galleryItem.querySelector('.gallery__item-title').textContent = item.name;
    console.log(document.querySelector('.gallery'));
    document.querySelector('.gallery').append(galleryItem); 
});
};
GalleryItems();

// function Like (){
//     let heart = document.querySelectorAll('.gallery__item-like');
//     console.log(heart);
//     let i =0;
//     while ( i<heart.length){
//     heart[i].addEventListener('click', function() {
//         console.log(heart[i]);
//         var target = event.target;
//         if (target.classList == "gallery__item-like"){
//             target.classList.add("gallery__item-like_active");
//         } else {
//             target.classList.remove("gallery__item-like_active");
//         }
//     });
//     i++;
//     }};
//     Like ();

document.addEventListener('click', function() {
            let target = event.target;
            if (target.classList == "gallery__item-like"){
                target.classList.add("gallery__item-like_active");
            }else{
                target.classList.remove("gallery__item-like_active");
            }

            if(target.classList == 'gallery__trash-bin'){
                target.closest('.gallery__item').remove();
                initialCards.forEach(function(item,i) {
                    if (item.name === target.closest('.gallery__item').querySelector('.gallery__item-title').textContent){
                        initialCards.splice(i,1);
                    }
                })
            }

            if(target.classList == 'gallery__item-pic'){
                console.log("Nryek yf rfhnbyre");
                let subtitle = target.closest('.gallery__item').querySelector('.gallery__item-title').textContent;
                let image = target.closest('.gallery__item').querySelector('.gallery__item-pic').src;
                popupFullImage.src = image;
                popupSubtitle.textContent = subtitle;
                popupImage.classList.add('popup-image_display_flex');
            }

            if(target.classList == 'popup-image__close-cross'){
                popupImage.classList.remove('popup-image_display_flex');
            }
        });
        
function togglePopUp(){
    if (popup.className=='popup') {
        popup.classList.add('popup_display_flex');


        nameInput.value = profileName.textContent;
        jobInput.value = profileStatus.textContent;
    
    } else {
        popup.classList.remove('popup_display_flex');
    }
}
function togglePopUpAdd(){
    if (addPlacePopup.className=='popup') {
        addPlacePopup.classList.add('popup_display_flex');


        nameInput.value = profileName.textContent;
        jobInput.value = profileStatus.textContent;
    
    } else {
        addPlacePopup.classList.remove('popup_display_flex');
    }
}
/*settings.addEventListener('click', function OpenPopUp(){
        popup.classList.remove('popup_display_none');

}); 
closeBtn.addEventListener('click', function ClosePopUp(){
    popup.classList.remove('popup_display_none');
}); */

// Находим форму в DOM
/*let nameInput = popup.querySelector('#name').getAttribute('value');
console.log(nameInput);*/

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function AddCardformSubmit (evt) {
    evt.preventDefault(); 
    
    let galleryItem = galleryTemplate.cloneNode(true);
    console.log(placeInput.value);
    console.log(linkInput.value);

    console.log(initialCards.length);
    //initialCards[length+1].name = placeInput.value;
    //initialCards[length+1].link = linkInput.value;
    
    //initialCards.push( name = placeInput.value, link = linkInput.value);

    initialCards.push({'name':placeInput.value,'link':linkInput.value});
    console.log(initialCards[length+1]);
    console.log(initialCards);

    galleryItem.querySelector('.gallery__item-pic').src = linkInput.value;
    galleryItem.querySelector('.gallery__item-title').textContent = placeInput.value;

    document.querySelector('.gallery').prepend(galleryItem); 
    addPlacePopup.classList.remove('popup_display_flex');
    //GalleryItems();
    // Like();
    return false;
}
function formSubmitHandler (evt) {
    evt.preventDefault(); 
                        // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    // Получите значение полей из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInputVal.value;
    profileStatus.textContent = jobInputVal.value;
    popup.classList.remove('popup_display_flex');
    return false;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popup.addEventListener('submit', formSubmitHandler); 
settings.addEventListener('click', togglePopUp);
closeBtn.addEventListener('click', togglePopUp);

addPlaceBtn.addEventListener('click', togglePopUpAdd);
addCloseBtn.addEventListener('click', togglePopUpAdd);
popupCard.addEventListener('submit', AddCardformSubmit); 