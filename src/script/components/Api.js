export class Api{
    constructor(config){
        this._urlCards = config.urlCards;
        this._urlUserInfo = config.urlUser;
        this._headers = config.headers;
    }

    getData(){
       return fetch(this._urlCards, {
            method: 'GET',
            headers: this._headers
        })
        .then((res) => {
            if (res.ok){
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err)=>{
            console.log(err)})
    }

    getUserInfo(){
        return fetch(this._urlUserInfo, {
             method: 'GET',
             headers: this._headers
         })
         .then((res) => {
            if (res.ok){
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
         .catch((err)=>{
             console.log(err)})
     }

     addUserInfo(data){
        return fetch(this._urlUserInfo, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
              name: data.name,
              about: data.about
            })
          }) 
          .then((res) => {
            if (res.ok){
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
         .catch((err)=>{
             console.log(err)})
     }

     addNewCard(data){
        return fetch(this._urlCards, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
              name: data.place,
              link: data.link
            })
          }) 
          .then((res) => {
            if (res.ok){
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
         .catch((err)=>{
             console.log(err)})
     }

     deleteCard(cardId){
        return fetch(`${this._urlCards}${cardId}`, {
            method: 'DELETE',
            headers: this._headers
          }) 
          .then((res) => {
            if (res.ok){
                console.log(res)
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
         .catch((err)=>{
             console.log(err)})
     }

     putLike(cardId){
        return fetch(`${this._urlCards}likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers
          }) 
          .then((res) => {
            if (res.ok){
                console.log(res)
                return res.json();  
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
         .catch((err)=>{
             console.log(err)})
     }

     deleteLike(cardId){
        return fetch(`${this._urlCards}likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
          }) 
          .then((res) => {
            if (res.ok){
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
         .catch((err)=>{
             console.log(err)})
     }

     addAvatar(link){
        return fetch(`${this._urlUserInfo}avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
              avatar: link,
            })
          }) 
          .then((res) => {
            if (res.ok){
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
         .catch((err)=>{
             console.log(err)})
     }
}