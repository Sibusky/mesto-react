import React from 'react'

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__item">
      <img className="elements__image" alt={props.card.title} src={props.card.link} onClick={handleClick} />
      <div className="elements__title">
        <h3 className="elements__name">{props.card.title}</h3>
        <div className="elements__like-counter">
          <button className="elements__like" type="button"></button>
          <span className="elements__counter"></span>
        </div>
      </div>
      <button className="elements__delete-card-button button" type="button"></button>
    </li>
  )
}
