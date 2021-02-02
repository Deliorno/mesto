export class FormValidator {
    constructor(form, validationConfig){
        this.form = form;
        this.validationConfig = validationConfig;
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