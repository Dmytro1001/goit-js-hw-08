// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryIt = document.querySelector('.gallery');
const markup = galleryItems.reduce((acc, { preview, original, description }) => acc + `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`, '');

galleryIt.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay: 250});
gallery.on('show.simplelightbox', function () {
});
console.log(galleryItems);
