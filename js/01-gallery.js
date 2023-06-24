import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createMarkupItems(arr) {
    return arr.map(({preview, original, description}) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')};

galleryContainer.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems));

galleryContainer.addEventListener('click', handlerClickImage)

const instance = basicLightbox.create(
    `
  <img width="1280" height="auto" src="">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', handlerEsc);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', handlerEsc);
      },
    }
  );
  
  function handlerClickImage(e) {
    e.preventDefault();
    const datasetSource = e.target.dataset.source;
    if (datasetSource){
        instance.element().querySelector('img').src = datasetSource;
        instance.show()};
  }
  
  function handlerEsc(e) {
    if (e.code === 'Escape'){ 
        instance.close()
    };
  }


