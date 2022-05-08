import React from 'react'

export default function PopupWithForm(props) {
  return (
    <div>
        <div className={`popup popup_place_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <form className="popup__form popup__form_place_profile" name={props.name} noValidate>
            <h2 className="popup__title">{props.title}</h2>
            <fieldset className="popup__inputs">
              <ul className="popup__inputs-list">
                {props.children}
              </ul>
              <button className="popup__save-button"
                type="submit">{props.buttonText}</button>
            </fieldset>
          </form>
          <button className="popup__close-button" onClick={props.onClose} type="button"></button>
        </div>
      </div>
    </div>
  )
}