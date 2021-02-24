export class UserInfo{
    constructor(name, info, avatar, api){
        this._name = name;
        this._info = info;
        this._avatar = avatar;
        this._api = api;
        this.nameInput = document.querySelector('#name');
        this.jobInput = document.querySelector('#job');
    }

    getUserInfo(){
        this.nameInput.value = this._name.textContent;
        this.jobInput.value = this._info.textContent;
        return {name:this._name.textContent,about:this._info.textContent}
    }

    setUserInfo(){
        Promise.all([this._api.getUserInfo()])
            .then(([userData]) => {
                this._name.textContent = userData.name;
                this._info.textContent = userData.about;
                this._avatar.src = userData.avatar;
            })
            .catch(err => console.log(`Ошибка загрузки данных: ${err}`));  
    }
}