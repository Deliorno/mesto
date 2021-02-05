export class FormValidator {
    constructor(form, validationConfig){
        this.form = form;
        this.validationConfig = validationConfig;
        this._inputList = Array.from(this.form.querySelectorAll(this.validationConfig.inputSelector));
        this._submitButton = this.form.querySelector(this.validationConfig.submitButtonSelector);
    }
    
    enableValidation(){
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        this._setEventListener();
    }

    resetErrors(){
        const error = Array.from(this.form.querySelectorAll('.popup__row-error'));
        error.forEach((err) => {
            err.textContent='';
      });
      console.log(this.form.checkValidity())
      this._toggleButton(this._submitButton,this.form.checkValidity());
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
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
              this._validateText(inputElement);
              this._toggleButton(this._submitButton, this.form.checkValidity());
              console.log(this.form.checkValidity());
            });
          });
    }

}
