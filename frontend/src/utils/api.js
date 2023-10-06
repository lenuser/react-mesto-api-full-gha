class Api {
  constructor(options) {
    this._url = options.baseUrl;
  }
  // метод который проверяет ответ
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject();
  }
  //получение профиля
  getInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        'Authorization' : `Bearer ${token}`
      },
    }).then(this._checkResponse);
  }

  //получение карточек
  getCards(token) {
    return fetch(`${this._url}/cards`, {
      headers: {
        'Authorization' : `Bearer ${token}`
      },
    }).then(this._checkResponse);
  }
  //кладет информацию о имени и профессии в профиле
  setUserInfo(data,token) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({ name: data.profilename, about: data.profilejob }),
    }).then(this._checkResponse);
  }

  //аватарка
  setAvatarNew({ avatar,token }) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({ avatar }),
    }).then(this._checkResponse);
  }
  //создание новой карточки
  addCard(data,token) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({
        name: data.nameCardsInput,
        link: data.linkCardsInput,
      }),
    }).then(this._checkResponse);
  }
  //постановка лайка
  addLike(cardId,token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        'Authorization' : `Bearer ${token}`
      },
    }).then(this._checkResponse);
  }
  //удаление лайка
  deleteLike(cardId,token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        'Authorization' : `Bearer ${token}`
      },
    }).then(this._checkResponse);
  }
  //удаление карточки
  deleteCard(cardId,token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        'Authorization' : `Bearer ${token}`
      },
    }).then(this._checkResponse);
  }
}
const api = new Api({
  baseUrl: "https://lis.front.nomoredomainsrocks.ru",
});

export default api;
