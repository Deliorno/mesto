
// const validationConfig = {
//     formSelector: '.popup__card',
//     inputSelector: '.popup__row',
//     submitButtonSelector: '.popup__btn',
//     inactiveButtonClass: 'popup__btn_disabled',
//     //inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__row-error_active'
//   };
  export class FormValidator {
    constructor(form){
        this.form = form;
        this.validationConfig = {
            formSelector: '.popup__card',
            inputSelector: '.popup__row',
            submitButtonSelector: '.popup__btn',
            inactiveButtonClass: 'popup__btn_disabled',
            //inputErrorClass: 'popup__input_type_error',
            errorClass: 'popup__row-error_active'
          };
    }
    
    enableValidation(){
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })

        this._setEventListener();
    }

    _resetErrors(){
        const error = Array.from(this.form.querySelectorAll('.popup__row-error'));
        error.forEach((err) => {
            err.textContent='';
      });
    }

    _showInputError(inputElement, errorMessage){
        const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.validationConfig.errorClass);
      };
      
    _hideInputError(inputElement){
        console.log(inputElement.id);
        const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.remove(this.validationConfig.errorClass);
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
            submitButton.classList.add(this.validationConfig.inactiveButtonClass);
            submitButton.disabled = 'disabled';
        } else {
            submitButton.classList.remove(this.validationConfig.inactiveButtonClass);
            submitButton.disabled = false;
        }
        }

    _setEventListener(){
        const inputList = Array.from(this.form.querySelectorAll(this.validationConfig.inputSelector));
        const submitButton = this.form.querySelector(this.validationConfig.submitButtonSelector);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
              this._validateText(inputElement);
              this._toggleButton(submitButton, this.form.checkValidity());
            });
          });
    }

}
