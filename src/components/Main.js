import React from 'react';
import Card from './Card'
import { CurrentUserContext } from '../context/CurrentUserContext';


export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete }) {

    // Объявляю переменные состояния через хук useState
    // const [userName, setUserName] = useState("");
    // const [userDescription, setUserDescription] = useState("");
    // const [userAvatar, setUserAvatar] = useState("");
    //const [cards, setCards] = useState([]);

    const { currentUser } = React.useContext(CurrentUserContext); // Подписываюсь на контекст CurrentUserContext

    // React.useEffect(() => {
    //     api.getInitialCards()
    //         .then((cardList) => {
    //             setCards(cardList)

    //             // const formattedData = cardList.map((card) => {
    //             //     return {
    //             //         name: card.name,
    //             //         link: card.link,
    //             //         likes: card.likes,
    //             //         cardId: card._id,
    //             //         ownerId: card.owner._id
    //             //     }
    //         })

    //         // // Через setCards отправляю данные карточек в cards
    //         // setCards(formattedData)
    //         // })
    //         .catch(err => console.log(`Ошибка: ${err}`))
    // }, []);

    // // Функция для установки лайка
    // function handleCardLike(card) {
    //     // Проверяю, есть ли уже лайк на этой карточке
    //     const isLiked = card.likes.some(i => i._id === currentUser.id);

    //     // Отправляю запрос в API и получаю обновлённые данные карточки
    //     // Запись setCards((state) => state.map((c) => c._id === card._id ? newCard : c)); равносильна записи:
    //     // setCards(cards.map((c) => c._id === card._id ? newCard : c));
    //     api.changeLikeCardStatus(card._id, !isLiked)
    //         .then((newCard) => {
    //             setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    //         })
    // }

    // // Функция для удаления карточек
    // function handleCardDelete(card) {
    //     // Отправляю запрос на удаление карточки и получаю обновлённые данные о карточках
    //     api.deleteCard(card._id)
    //         .then(() => {
    //             // Методом filter() возвращаю массив без удалённой карточки
    //             setCards((state) => state.filter((c) => c._id !== card._id));
    //         })
    // }

    return (
        <main className="container">
            <section className="profile">
                <div className="profile__avatar-container">
                    <div className="profile__avatar-hover" onClick={onEditAvatar}></div>
                    <img className="profile__avatar"
                        alt="Аватар профиля"
                        src={currentUser.avatar}
                    />
                </div>

                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit-button button" onClick={onEditProfile} type="button"
                            aria-label="Редактировать профиль"></button>
                    </div>
                    <p className="profile__bio">{currentUser.about}</p>
                </div>
                <button className="profile__add-button button" onClick={onAddPlace} type="button"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">

                    {/* Вставляю карточки */}
                    {
                        cards.map((item) => (
                            <Card onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} card={item} key={item._id} />
                        ))
                    }

                </ul>
            </section>

        </main>
    )
}