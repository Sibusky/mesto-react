import React from 'react'

export default function Card({ link, title }) {
  return (
    <div className="elements__template">
        <li class="elements__item">
            <img class="elements__image" alt="Краснодарский край" style={{ backgroundImage: `url(${link})` }} />
            <div class="elements__title">
                <h3 class="elements__name">{title}</h3>
                <div class="elements__like-counter">
                    <button class="elements__like" type="button"></button>
                    <span class="elements__counter"></span>
                </div>                
            </div>
            <button class="elements__delete-card-button button" type="button"></button>
        </li>
    </div>
  )
}
