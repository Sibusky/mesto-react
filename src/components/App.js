import React, { useState, } from 'react';
import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import { api } from '../utils/Api.js'
import Card from './Card'

function App() {

  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [userName, setUserName] = useState();
  let [userDescription, setUserDescription] = useState();
  let [userAvatar, setUserAvatar] = useState();
  let [cards, setCards] = useState([]);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false)
  }

  React.useEffect(() => {
    api.getProfile()
      .then((res) => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
      .catch(err => console.log(`Ошибка: ${err}`))
  });

  React.useEffect(() => {
    api.getInitialCards()
    .then((res) => {
      console.log(res)
      const formattedData = res.map((cardData) => {
        return {
          link: cardData.link,
          title: cardData.name
        }
      })
      console.log('formdata', formattedData)
      setCards(formattedData)
    })
    .catch(err => console.log(`Ошибка: ${err}`))
  }, [])

  console.log(cards[1].link)

  return (
    <div className="page">

      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} userName={userName} userDescription={userDescription} userAvatar={userAvatar} />
      {
        cards.forEach((item) => {
          <Card link={item.link} title={item.title} />
        })
      }
      <Footer />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

      {/* <div className="popup popup_place_profile">
        <div className="popup__container">
          <form className="popup__form popup__form_place_profile" name="profile-edit-form" novalidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <fieldset className="popup__inputs">
              <ul className="popup__inputs-list">
                <li className="popup__inputs-list-item">
                  <input className="popup__input popup__input_type_name" type="text" placeholder="Имя"
                    name="profilename-input" required minlength="2" maxlength="40" value="" />
                  <span className="popup__input-error profilename-input-error"></span>
                </li>
                <li className="popup__inputs-list-item">
                  <input className="popup__input popup__input_type_bio" type="text" placeholder="О себе"
                    name="bio-input" required minlength="2" maxlength="200" value="" />
                  <span className="popup__input-error bio-input-error"></span>
                </li>
              </ul>
              <button className="popup__save-button popup__save-button_place_profile"
                type="submit">Сохранить</button>
            </fieldset>
          </form>
          <button className="popup__close-button popup__close-button_place_profile button" type="button"></button>
        </div>
      </div>

      <div className="popup popup_place_cards">
        <div className="popup__container">
          <form className="popup__form popup__form_place_card" name="cards-add-form" novalidate>
            <h2 className="popup__title">Новое место</h2>
            <fieldset className="popup__inputs">
              <ul className="popup__inputs-list">
                <li className="popup__inputs-list-item">
                  <input className="popup__input popup__input_type_place-name" type="text"
                    placeholder="Название" name="placename-input" required minlength="2" maxlength="30" value="" />
                  <span className="popup__input-error placename-input-error"></span>
                </li>
                <li className="popup__inputs-list-item">
                  <input className="popup__input popup__input_type_link" type="url"
                    placeholder="Ссылка на картинку" name="picturelink-input" required value="" />
                  <span className="popup__input-error picturelink-input-error"></span>
                </li>
              </ul>
              <button className="popup__save-button popup__save-button_place_card" type="submit">Создать</button>
            </fieldset>
          </form>
          <button className="popup__close-button popup__close-button_place_cards button" type="button"></button>
        </div>
      </div>

      <div className="popup popup_place_image">
        <figure className="popup__image-container">
          <figcaption className="popup__image-title">Краснодарский край</figcaption>
          <img className="popup__image" alt="Краснодарский край"
            src="" />
          <button className="popup__close-button popup__close-button_place_image button" type="button"></button>
        </figure>
      </div>

      <div className="popup popup_place_delete-confirm">
        <div className="popup__container">
          <form className="popup__form popup__form_place_delete-confirm" name="delete-confirm-form" novalidate>
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__save-button popup__save-button_place_delete-confirm" type="submit">Да</button>
          </form>
          <button className="popup__close-button popup__close-button_place_delete-confirm button" type="button"></button>
        </div>
      </div>

      <div className="popup popup_place_edit-avatar">
        <div className="popup__container">
          <form className="popup__form popup__form_place_edit-avatar" name="avatar-edit-form" novalidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <fieldset className="popup__inputs">
              <ul className="popup__inputs-list">
                <li className="popup__inputs-list-item">
                  <input className="popup__input popup__input_type_link" type="url"
                    placeholder="Ссылка на аватар" name="avatarlink-input" required value="" />
                  <span className="popup__input-error avatarlink-input-error"></span>
                </li>
              </ul>
              <button className="popup__save-button popup__save-button_place_edit-avatar" type="submit">Сохранить</button>
            </fieldset>
          </form>
          <button className="popup__close-button popup__close-button_place_edit-avatar button" type="button"></button>
        </div>
      </div> */}

    </div>
  );
}

export default App;




// Закрытие Попапов

// Отображение аватара