import React from 'react'

export default function Card({ card, onCardClick }) {
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