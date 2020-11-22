
let settings = document.querySelector('#settings');
let popup =  document.getElementById('popup');
let close_btn = document.querySelector('.popup__close-cross');

function togglePopUp(){
    if (popup.className=='popup popup_display_none') {
        console.log("rkbr");
        popup.classList.remove('popup_display_none');

        let profile__name = document.querySelector('#profile__name');
        let nameInput = document.querySelector('#name');
        nameInput.setAttribute('value',profile__name.textContent);

        let profile__status = document.querySelector('#profile__status');
        let jobInput = document.querySelector('#job').setAttribute('value', profile__status.textContent);
    
    } else {
        popup.classList.add('popup_display_none');
    }
}
/*settings.addEventListener('click', function OpenPopUp(){
        popup.classList.remove('popup_display_none');

}); 
close_btn.addEventListener('click', function ClosePopUp(){
    popup.classList.remove('popup_display_none');
}); */
settings.addEventListener('click', togglePopUp);
close_btn.addEventListener('click', togglePopUp);

// Находим форму в DOM
let save_btn = document.getElementById('popup_btn');
/*let nameInput = popup.querySelector('#name').getAttribute('value');
console.log(nameInput);*/

// Определение нажатого лайка, чекбокс?
let heart = document.querySelectorAll('.gallery__item-like');
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
    let nameInput = document.querySelector('#name').value;// Воспользуйтесь инструментом .querySelector()
    let jobInput = document.querySelector('#job').value;// Воспользуйтесь инструментом .querySelector()
    // Выберите элементы, куда должны быть вставлены значения полей
    let profile__name = document.querySelector('#profile__name');
    let profile__status = document.querySelector('#profile__status');
    // Вставьте новые значения с помощью textContent
    profile__name.innerHTML = nameInput;
    profile__status.textContent = jobInput;
    popup.classList.add('popup_display_none');
    return false;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
save_btn.addEventListener("submit", formSubmitHandler); 