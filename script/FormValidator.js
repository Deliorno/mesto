
const config = {
    formSelector: '.popup__card',
    inputSelector: '.popup__row',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    //inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__row-error_active'
  };
  export class FormValidator {
    constructor(form){
        this.form = form;
    }
    
    enableValidation(){
        this._setEventListener();
    }

    _showInputError(inputElement, errorMessage){
        const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(config.errorClass);
      };
      
    _hideInputError(inputElement){
        console.log(inputElement.id);
        const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.remove(config.errorClass);
        errorElement.textContent = '';
      };
    
    _validateText(inputElement){
        if (!(inputElement.validity.valid))
        {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _toggleButton(submitButton, isValid){
        if (!isValid){
            submitButton.classList.add(config.inactiveButtonClass);
            submitButton.disabled = 'disabled';
        } else {
            submitButton.classList.remove(config.inactiveButtonClass);
            submitButton.disabled = false;
        }
        }

    _setEventListener(){
        const inputList = Array.from(this.form.querySelectorAll(config.inputSelector));
        const submitButton = this.form.querySelector(config.submitButtonSelector);
        console.log(inputList)
        console.log(submitButton)
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
              this._validateText(inputElement);
              this._toggleButton(submitButton, this.form.checkValidity());
            });
          });
    }

}
