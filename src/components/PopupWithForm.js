import React from 'react'

export default function PopupWithForm({ title, name, isOpen, onClose, children}) {
  return (
    <div>
        <div className={`popup popup_place_${name} ${isOpen ? 'popup_opened' : ''}`} onMouseDown={onClose}>
        <div className="popup__container">
          <form className="popup__form popup__form_place_profile" name={name} noValidate>
            <h2 className="popup__title">{title}</h2>
            <fieldset className="popup__inputs">
              <ul className="popup__inputs-list">
                {children}
              </ul>
              <button className="popup__save-button"
                type="submit"></button>
            </fieldset>
          </form>
          <button className="popup__close-button" onClick={onClose} type="button"></button>
        </div>
      </div>
    </div>
  )
}
