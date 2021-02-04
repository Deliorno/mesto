export class UserInfo{
    constructor(name, info){
        this._name = name;
        this._info = info;
        this._profileName = document.querySelector('#profile__name');
        this._profileStatus = document.querySelector('#profile__status');
    }

    getUserInfo(){
        this._name.value = this._profileName.textContent;
        this._info.value = this._profileStatus.textContent;
    }

    setUserInfo(){
        this._profileName.textContent = this._name.value;
        this._profileStatus.textContent = this._info.value;
    }
}