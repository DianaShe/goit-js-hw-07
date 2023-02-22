import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryMarkup = makeGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryItemClick);

function makeGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
              <a class="gallery__link" href='${original}'>
                  <img
                  class="gallery__image"
                  src = "${preview}"
                  data-source = "${original}"
                  alt = "${description}"
                  />
              </a>
          </div>`;
      }).join("");
}
let lightboxImage = "";

function onGalleryItemClick(event) {
    event.preventDefault();
    window.addEventListener('keydown', onEscKey);
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    lightboxImage = basicLightbox.create (`
        <img width="1400" height="900" src= ${event.target.dataset.source} />
        `)
        lightboxImage.show();
}    

function onEscKey(event) {
    if (event.code === "Escape") {
        lightboxImage.close();
        window.removeEventListener('keydown', onEscKey);
    }
    
}