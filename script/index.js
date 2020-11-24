
let settings = document.querySelector('#settings');
let popup =  document.getElementById('popup');
let closeBtn = document.querySelector('.popup__close-cross');
let save_btn = document.getElementById('popup_btn');
let heart = document.querySelectorAll('.gallery__item-like');
let profileName = document.querySelector('#profile__name');
let nameInput = document.querySelector('#name');
let profileStatus = document.querySelector('#profile__status');
let popupCard= document.querySelector('.popup__card');
let nameInputVal = document.querySelector('#name');
let jobInputVal = document.querySelector('#job');
let jobInput = document.querySelector('#job');

function togglePopUp(){
    if (popup.className=='popup') {
        popup.classList.add('popup_display_flex');


        nameInput.value = profileName.textContent;
        jobInput.value = profileStatus.textContent;
    
    } else {
        popup.classList.remove('popup_display_flex');
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

// Определение нажатого лайка, чекбокс?
let i =0;
while ( i<heart.length){
heart[i].addEventListener('click', function() {
    var target = event.target;
    if (target.classList == "gallery__item-like"){
        target.classList.add("gallery__item-like_active");
    } else {
        target.classList.remove("gallery__item-like_active");
    }
});
i++;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
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
popupCard.addEventListener('submit', formSubmitHandler); 
settings.addEventListener('click', togglePopUp);
closeBtn.addEventListener('click', togglePopUp);