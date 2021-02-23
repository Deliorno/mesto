export class UserInfo{
    constructor(name, info, avatar, api){
        this._name = name;
        this._info = info;
        this._avatar = avatar;
        this._api = api;
        //this._api = api;
        // this._profileName = document.querySelector('#profile__name');
        // this._profileStatus = document.querySelector('#profile__status');
    }

    getUserInfo(){
        //let userInfo;
        Promise.all([this._api.getUserInfo()])
            .then(([userData]) => {
                this._name.textContent = userData.name;
                this._info.textContent = userData.about;
                this._avatar.src = userData.avatar;
            })
            //.finally((userData)=> {return userInfo = userData})
            .catch(err => console.log(`Ошибка загрузки данных: ${err}`));
    }

    setUserInfo(inputs){
        this._name.textContent = inputs.name;
        this._info.textContent = inputs.about;
        //this._avatar.textContent = inputs.avatar;
    }
}