// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// доп стили
import 'simplelightbox/dist/simple-lightbox.min.css';

const galeryImg = document.querySelector('.gallery');
const imageItemsMarkup = createEl(galleryItems);

function createEl(el) {
  return el
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
}
galeryImg.insertAdjacentHTML('beforeend', imageItemsMarkup);
galeryImg.addEventListener('click', e => {
  e.preventDefault();
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
