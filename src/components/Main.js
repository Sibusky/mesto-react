import React from 'react'

export default function Main({ onEditProfile, onAddPlace, onEditAvatar }) {





    return (
        <main className="container">
            <section className="profile">
                <div className="profile__avatar-container">
                    <div className="profile__avatar-hover" onClick={onEditAvatar}></div>
                    <img className="profile__avatar" src="<%=require('./images/avatar.png')%>" alt="Аватар профиля" />
                </div>

                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">Жан Жак</h1>
                        <button className="profile__edit-button button" onClick={onEditProfile} type="button"
                            aria-label="Редактировать профиль"></button>
                    </div>
                    <p className="profile__bio">Исследователь жизни</p>
                </div>
                <button className="profile__add-button button" onClick={onAddPlace} type="button"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">

                </ul>
            </section>
        </main>
    )
}
