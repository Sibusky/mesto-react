import React from 'react'
import Card from './Card'


export default function Main(props) {
    return (
        <main className="container">
            <section className="profile">
                <div className="profile__avatar-container">
                    <div className="profile__avatar-hover" onClick={props.onEditAvatar}></div>
                    <img className="profile__avatar" alt="Аватар профиля"
                    src={props.userAvatar}
                    />
                </div>

                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{props.userName}</h1>
                        <button className="profile__edit-button button" onClick={props.onEditProfile} type="button"
                            aria-label="Редактировать профиль"></button>
                    </div>
                    <p className="profile__bio">{props.userDescription}</p>
                </div>
                <button className="profile__add-button button" onClick={props.onAddPlace} type="button"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">

                    {
                        props.cards.map((item) => (
                            <Card onCardClick={props.onCardClick} card={{ link: item.link, title: item.title }} />
                        ))
                    }

                </ul>
            </section>

        </main>
    )
}
