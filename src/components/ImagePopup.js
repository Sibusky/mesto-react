import React from 'react'

export default function ImagePopup(props) {
  return (
    <div className={`popup popup_place_image ${props.card ? "popup_opened" : " "}`}>
      <figure className="popup__image-container">
        <figcaption className="popup__image-title">{props.card ? props.card.title : " "}</figcaption>
        <img className="popup__image" 
          src={props.card ? props.card.link : " "}
          alt={props.card ? props.card.title : " "}
          />
        <button className="popup__close-button popup__close-button_place_image button" onClick={props.onClose} type="button"></button>
      </figure>
    </div>
  )
}
