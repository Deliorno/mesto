const showInputError = (form, inputElement, errorMessage, config) => {
    const errorElement = form.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };
  
  const hideInputError = (form, inputElement, config) => {
    const errorElement = form.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  };

function validateText(form, inputElement, config){
    errorElement = form.querySelector(`.${inputElement.id}-error`);
    if (!(inputElement.validity.valid))
    {
        showInputError(form, inputElement, inputElement.validationMessage, config);
    } else {
        hideInputError(form, inputElement, config);
    }
}

function toggleButton(submitButton, isValid, config){
if (!isValid){
    submitButton.classList.add(config.inactiveButtonClass);
    submitButton.disabled = 'disabled';
} else {
    submitButton.classList.remove(config.inactiveButtonClass);
    submitButton.disabled = false;
}
}

function setEventListener(form, config){
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const submitButton = form.querySelector(config.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        validateText(form, inputElement, config);
        toggleButton(submitButton, form.checkValidity(), config);
      });
    });
}

  function formValidation(config){
    const allFroms = document.querySelectorAll(config.formSelector);
    allFroms.forEach(form =>{
        setEventListener(form, config);
        const submitButton = form.querySelector(config.submitButtonSelector);
        //toggleButton(submitButton, form.checkValidity(), config);
    })
    }

    const config = {
        formSelector: '.popup__card',
        inputSelector: '.popup__row',
        submitButtonSelector: '.popup__btn',
        inactiveButtonClass: 'popup__btn_disabled',
        //inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__row-error_active'
      }; 

    formValidation(config);