import React, { useState, } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup';

function App() {

  // Объявляю переменные состояния через хук useState
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [selectedCard, setSelectedCard] = useState(null); // Карточка, на которую кликнули для открытия

  // Функциии для изменения состояния переменных (аватар, имя профиля, описание профиля, клинутая карточка)
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  };

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  // Функция закрытия всех попапов
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null)
  }



  return (
    <div className="page">

      <Header />

      <Main onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick} />

      <Footer />

      {/* Попап загрузки аватара */}
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        formName="avatar-edit-form"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>

        <li className="popup__inputs-list-item">
          <input
            className="popup__input popup__input_type_link"
            type="url"
            placeholder="Ссылка на аватар"
            name="avatarlink-input"
            required />
          <span className="popup__input-error avatarlink-input-error"></span>
        </li>

      </PopupWithForm>

      {/* Попап изменения данных профиля */}
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        formName="profile-edit-form"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>

        <li className="popup__inputs-list-item">
          <input
            className="popup__input popup__input_type_name"
            type="text"
            placeholder="Имя"
            name="profilename-input"
            required
            minLength="2"
            maxLength="40" />
          <span className="popup__input-error profilename-input-error"></span>
        </li>
        <li className="popup__inputs-list-item">
          <input
            className="popup__input popup__input_type_bio"
            type="text"
            placeholder="О себе"
            name="bio-input"
            required
            minLength="2"
            maxLength="200" />
          <span className="popup__input-error bio-input-error"></span>
        </li>

      </PopupWithForm>

      {/* Попап добавления новой карточки */}
      <PopupWithForm
        name="card"
        title="Новое место"
        formName="cards-add-form"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>

        <li className="popup__inputs-list-item">
          <input
            className="popup__input popup__input_type_place-name"
            type="text"
            placeholder="Название"
            name="placename-input"
            required minLength="2"
            maxLength="30" />
          <span className="popup__input-error placename-input-error"></span>
        </li>
        <li className="popup__inputs-list-item">
          <input
            className="popup__input popup__input_type_link"
            type="url"
            placeholder="Ссылка на картинку"
            name="picturelink-input"
            required />
          <span className="popup__input-error picturelink-input-error"></span>
        </li>

      </PopupWithForm>

      {/* Попап открытия изображения карточки */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />


    </div>
  );
}

export default App;