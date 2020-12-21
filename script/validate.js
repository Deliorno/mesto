
//const errMesTooShort = 'Минимальное количество символов:2. Длина текста сейчас: 1 символ';
//const errMesNothing = 'Вы пропустили это поле';
//const errName = document.querySelector(`#name`);

//const buttonElement = 

const showInputError = (inputElement, errorMessage) => {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__row-error_active');
  };
  
  const hideInputError = (inputElement) => {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove('popup__row-error_active');
    errorElement.textContent = '';
  };

function validateText(inputElement){
    //console.log(inputElement.id);
    //console.log(inputElement.validity.valid);
    //console.log(inputElement.validationMessage);
    errorElement = document.querySelector(`.${inputElement.id}-error`);
    if (!(inputElement.validity.valid))
    {
        showInputError(inputElement, inputElement.validationMessage);
    } else {
        hideInputError(inputElement);
    }
}
//document.querySelector('#name').addEventListener('input', validateText);

const toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.classList.add('form__submit_inactive');
    } else {
          // иначе сделай кнопку активной
      buttonElement.classList.remove('form__submit_inactive');
    }
  }; 

function setEventListeners(){
    const inputList = Array.from(document.querySelectorAll('.popup__row'));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        validateText(inputElement);
      });
    });
  };

  function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  }
  
  function toggleButtonState(inputList,buttonElement){
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
  } else {
    buttonElement.classList.remove('button_inactive');
  } 
  }
  setEventListeners();