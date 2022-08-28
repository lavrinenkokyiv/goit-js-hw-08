// Add imports above this line
import { galleryItems } from './gallery-items';
import '../css/common.css';
import '../css/01-gallery.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const onGalleryContainer = document.querySelector('.gallery');
const onItemsGallery = createItemsGallery(galleryItems);
onGalleryContainer.insertAdjacentHTML('beforeend', onItemsGallery);
function createItemsGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionType: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
