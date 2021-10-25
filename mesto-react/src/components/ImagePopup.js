import React from 'react';

function ImagePop() {
    return(
    <div className="popup" id="popup-gallery">
        <div className="popup__gallery">
            <button type="button" className="popup__close" data-popupid="popup-gallery"></button>
            <figure className="popup__figure">
            <img className="popup__img-gallery" src="#" alt="" />
            <figcaption className="popup__figcaption"></figcaption>
            </figure>
        </div>
    </div>
    )
}

export default ImagePop;