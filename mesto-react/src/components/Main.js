import React from 'react';
import fakeDude from '../images/unknown-avatar.jpeg';

function Main() {
    return (
        <main className="main">
            <section className="profile">
            <div className="profile__img-wrapper">
                <img className="profile__avatar" src={fakeDude} alt="аватар" />
            </div>
            <div className="profile__info">
                <div className="profile__main-info">
                <h1 className="profile__name"></h1>
                <button type="button" className="profile__edit-button button" data-popupid="popup-profile"></button>
                </div>
                <p className="profile__description"></p>
            </div>
            <button type="button" className="profile__add-button button" data-popupid="popup-place"></button>
            </section>

            <section className="cards-section">
            <ul className="cards">

            </ul>
            </section>

         </main>
    )
}

export default Main;