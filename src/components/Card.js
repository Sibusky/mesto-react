import React from 'react'
import { CurrentUserContext } from '../context/CurrentUserContext';

export default function Card({ card, onCardClick }) {

  
  // Подписываюсь на контекст CurrentUserContext
  const { currentUser } = React.useContext(CurrentUserContext);

  // Определяю, являюсь ли я владельцем текущей карточки
  const isOwn = card.ownerId === currentUser.id;

  // Создаю переменную, которую после задам в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `elements__delete-card-button ${isOwn ? 'elements__delete-card-button_visible' : 'elements__delete-card-button_hidden'}`
  );

  // Определяю, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаю переменную, которую после задам в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `elements__like ${isLiked ? 'elements__like_active' : ''}`
  );


  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__item">
      <img className="elements__image"
        alt={card.name}
        src={card.link}
        onClick={handleClick} />
      <div className="elements__title">
        <h3 className="elements__name">{card.name}</h3>
        <div className="elements__like-counter">
          <button className="elements__like" type="button"></button>
          <span className="elements__counter">{card.likes.length}</span>
        </div>
      </div>
      <button className="elements__delete-card-button button" type="button"></button>
    </li>
  )
}