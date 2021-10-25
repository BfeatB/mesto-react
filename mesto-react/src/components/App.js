import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePop from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    <ImagePop />
    <PopupWithForm title="Редактировать профиль"  name="profile" popupid="popup-profile">
      <label>
        <input className="popup__input" type="text" name="name" id="popup-profile-title" placeholder="Ваше имя" value="" required maxlength="40" minlength="2" />
        <span className="popup__error-message popup-profile-title-error"></span>
      </label>
      <label>
        <input className="popup__input" type="text" name="about" id="popup-profile-description" placeholder="Расскажите о себе" value="" required maxlength="200" minlength="2" />
        <span className="popup__error-message popup-profile-description-error"></span>
      </label>
          <button className="popup__button button" type="submit" data-popupid="popup-profile">Сохранить</button>
    </PopupWithForm>

    <PopupWithForm title="Новое место"  name="profileaddCard" popupid="popup-place">
      <label>
        <input className="popup__input" type="text" name="place" id="popup-place-name" placeholder="Название места" required maxlength="30" minlength="2" />
        <span className="popup__error-message popup-place-name-error"></span>
      </label>
      <label>
        <input className="popup__input" type="url" name="url" id="popup-place-url" placeholder="Ссылка на картинку" required />
        <span className="popup__error-message popup-place-url-error"></span>
      </label>
      <button className="popup__button button" type="submit" data-popupid="popup-place">Создать</button>
    </PopupWithForm>

    <PopupWithForm title="Вы уверены?"  name="confirmation" popupid="popup-confirmation">
      <button className="popup__button button" type="submit" data-popupid="popup-confirmation">Да</button>
    </PopupWithForm>

    <PopupWithForm title="Обновить аватар"  name="changeAvatar" popupid="popup-change-avatar">
      <label>
          <input className="popup__input" type="url" name="avatar" id="popup-change-avatar-url" placeholder="Ссылка на картинку" required />
          <span className="popup__error-message popup-change-avatar-url-error"></span>
      </label>
      <button className="popup__button button" type="submit" data-popupid="popup-change-avatar">Сохранить</button>
    </PopupWithForm>
    </>
  )    
    
}

export default App;
