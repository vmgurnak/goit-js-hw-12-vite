// Default export
import axiosSearch from './request-api';
import createMarkup from './markup';

// iziToast library
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
iziToast.settings({
  position: 'topRight',
  maxWidth: 300,
  // timeout: 5000,
  closeOnEscape: true,
  closeOnClick: true,
});

// SimpleLightbox library
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Elements ojects
const elements = {
  form: document.querySelector('.js-sumbit'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
  loaderWrap: document.querySelector('.js-loader-wrap'),
  moreBtn: document.querySelector('.js-btn'),
};

// Variables
let wordSearch = '';
let currentPage = 1;
let perPage = 40;
let totalImg = 1;
let totalPages = 1;

// Event listeners - submit to submit form
elements.form.addEventListener('submit', handlerSubmitForm);

// Event listeners - click to moreBtn
elements.moreBtn.addEventListener('click', handlerMoreBtn);

// Callback function for listener, for submitting a form
async function handlerSubmitForm(evt) {
  evt.preventDefault();
  currentPage = 1;
  loaderSow();
  moreBtnHidden();

  const { searchQuery } = evt.currentTarget.elements;
  const date = {
    search: searchQuery.value,
  };
  wordSearch = date.search;

  try {
    await axiosSearch(wordSearch, currentPage, perPage).then(
      ({ data, data: { hits }, data: { totalHits } }) => {
        totalImg = totalHits;
        totalPages = Math.ceil(totalImg / perPage);

        if (hits.length === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again.',
          });
          moreBtnHidden();
          currentPage = 1;
        } else {
          elements.gallery.innerHTML = createMarkup(hits);

          moreBtnSow();
        }
        lightbox.refresh();
        loaderHidden();
      }
    );
  } catch (error) {
    iziToast.error({
      message: 'Oops! Something went wrong! Try reloading the page!',
    });
    loaderHidden();
    console.log(error);
  } finally {
    evt.target.reset();
  }
}

// Callback function for listener, for click at MoreBtn
async function handlerMoreBtn() {
  currentPage += 1;

  if (currentPage > totalPages) {
    moreBtnHidden();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
    return;
  }

  moreBtnHidden();
  loaderSow();

  try {
    await axiosSearch(wordSearch, currentPage, perPage).then(
      ({ data, data: { hits }, data: { totalHits } }) => {
        elements.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));

        loaderHidden();
        moreBtnSow();

        lightbox.refresh();
      }
    );
  } catch (error) {
    iziToast.error({
      message: 'Oops! Something went wrong! Try reloading the page!',
    });
    loaderHidden();
    moreBtnSow();
  }

  // Card height
  elements.galleryItem = document.querySelector('.js-gallery-item');
  const heightItem = elements.galleryItem.getBoundingClientRect().height;

  // window.scrollBy page scroll
  window.scrollBy({
    top: heightItem * 2,
    left: 0,
    behavior: 'smooth',
  });
}

// Load and Error Handling Functions
function loaderSow() {
  elements.loader.classList.replace('hidden', 'show');
  elements.loaderWrap.classList.replace('hidden', 'show');
}
function loaderHidden() {
  elements.loader.classList.replace('show', 'hidden');
  elements.loaderWrap.classList.replace('show', 'hidden');
}

// moreBtnSow, moreBtnHidden function
function moreBtnSow() {
  elements.moreBtn.classList.replace('hidden', 'show');
}
function moreBtnHidden() {
  elements.moreBtn.classList.replace('show', 'hidden');
}
