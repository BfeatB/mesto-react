import React, { useEffect, useState } from 'react';
import fakeDude from '../images/unknown-avatar.jpeg';
import api from '../utils/Api.js'

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState(fakeDude);

    useEffect(() => {
        api.getUserInfo().then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        })
    })

    return (
        <main className="main">
            <section className="profile">
            <div className="profile__img-wrapper">
                <img className="profile__avatar" src={userAvatar} alt="аватар" onClick={onEditAvatar} />
            </div>
            <div className="profile__info">
                <div className="profile__main-info">
                <h1 className="profile__name">{userName}</h1>
                <button type="button" className="profile__edit-button button" onClick={onEditProfile}></button>
                </div>
                <p className="profile__description">{userDescription}</p>
            </div>
            <button type="button" className="profile__add-button button" onClick={onAddPlace}></button>
            </section>

            <section className="cards-section">
            <ul className="cards">

            </ul>
            </section>

         </main>
    )
}

export default Main;