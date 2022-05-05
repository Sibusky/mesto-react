import React from 'react'

export default function PopupWithForm({ title, name, isOpen, children}) {
  return (
    <div>
        <div className={`popup popup_place_${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <form className="popup__form popup__form_place_profile" name={name} novalidate>
            <h2 className="popup__title">{title}</h2>
            <fieldset className="popup__inputs">
              <ul className="popup__inputs-list">
                {children}
              </ul>
              <button className="popup__save-button"
                type="submit"></button>
            </fieldset>
          </form>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>
    </div>
  )
}
