import React from 'react';

function ImagePop() {
    return(
    <div class="popup" id="popup-gallery">
        <div class="popup__gallery">
            <button type="button" class="popup__close" data-popupid="popup-gallery"></button>
            <figure class="popup__figure">
            <img class="popup__img-gallery" src="#" alt="" />
            <figcaption class="popup__figcaption"></figcaption>
            </figure>
        </div>
    </div>
    )
}

export default ImagePop;