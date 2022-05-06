import React, { useState, } from 'react';
import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import { api } from '../utils/Api.js'
import ImagePopup from './ImagePopup';

function App() {

  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [userName, setUserName] = useState();
  let [userDescription, setUserDescription] = useState();
  let [userAvatar, setUserAvatar] = useState();
  let [cards, setCards] = useState([]);
  let [selectedCard, setSelectedCard] = useState(null);

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

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null)
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
        const formattedData = res.map((cardData) => {
          return {
            link: cardData.link,
            title: cardData.name
          }
        })
        setCards(formattedData)
      })
      .catch(err => console.log(`Ошибка: ${err}`))
  }, [])

  return (
    <div className="page">

      <Header />
      <Main onEditAvatar={handleEditAvatarClick} 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick} 
      userName={userName} userDescription={userDescription} 
      userAvatar={userAvatar} cards={cards} onCardClick={handleCardClick} />  
      <Footer />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <ImagePopup  card={selectedCard} onClose={closeAllPopups} />


    </div>
  );
}

export default App;




// Закрытие Попапов

// Отображение аватара