import React, { useState, } from 'react';
import Card from './Card'
import { api } from '../utils/api.js'


export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

    // Объявляю переменные состояния через хук useState
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    // Добавляю эффект, вызываемый при монтировании компонента, который будет 
    // совершать запрос в API за пользовательскими данными. Promise.all нужен
    // для того, чтобы карточки загружались только после получения информации
    // об ID пользователя
    React.useEffect(() => {
        Promise.all([api.getProfile(), api.getInitialCards()])
            .then(([userData, cardList]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar)

                // Формирую объект карточки
                const formattedData = cardList.map((card) => {
                    return {
                        name: card.name,
                        link: card.link,
                        likes: card.likes,
                        cardId: card._id,
                    }
                })

                // Через setCards отправляю данные карточек в cards
                setCards(formattedData)
            })
            .catch(err => console.log(`Ошибка: ${err}`))
    }, []);

    return (
        <main className="container">
            <section className="profile">
                <div className="profile__avatar-container">
                    <div className="profile__avatar-hover" onClick={onEditAvatar}></div>
                    <img className="profile__avatar"
                        alt="Аватар профиля"
                        src={userAvatar}
                    />
                </div>

                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button button" onClick={onEditProfile} type="button"
                            aria-label="Редактировать профиль"></button>
                    </div>
                    <p className="profile__bio">{userDescription}</p>
                </div>
                <button className="profile__add-button button" onClick={onAddPlace} type="button"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">

                    {/* Вставляю карточки */}
                    {
                        cards.map((item) => (
                            <Card onCardClick={onCardClick} card={item} key={item.cardId}/>
                        ))
                    }

                </ul>
            </section>

        </main>
    )
}