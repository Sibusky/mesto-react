import React, { useState, } from 'react'
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../context/CurrentUserContext';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    // Стейт, в котором содержаться значение инпута
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // Подписываюсь на контекст CurrentUserContext
    const { currentUser } = React.useContext(CurrentUserContext);

    // Обработчик изменения инпута имени обновляет стейт
    function handleChangeName(e) {
        setName(e.target.value);
    };
    
    // Обработчик изменения инпута описания обновляет стейт
    function handleChangeDescription(e) {
        setDescription(e.target.value);
    };

    // // Очищаю инпуты
    // function handleClear() {
    //     setName('');
    //     setDescription('');
    // }

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    // Обработчик формы
    function handleSubmit(e) {
        // Запрещаю браузеру переходить по адресу формы
        e.preventDefault();

        // Передаю значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            formName="profile-edit-form"
            buttonText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>

            <li className="popup__inputs-list-item">
                <input
                    className="popup__input popup__input_type_name"
                    type="text"
                    placeholder="Имя"
                    name="profilename-input"
                    required
                    minLength="2"
                    maxLength="40"
                    value={name}
                    onChange={handleChangeName} />
                <span className="popup__input-error profilename-input-error"></span>
            </li>
            <li className="popup__inputs-list-item">
                <input
                    className="popup__input popup__input_type_bio"
                    type="text"
                    placeholder="О себе"
                    name="bio-input"
                    required
                    minLength="2"
                    maxLength="200"
                    value={description}
                    onChange={handleChangeDescription} />
                <span className="popup__input-error bio-input-error"></span>
            </li>

        </PopupWithForm>
    )
}
