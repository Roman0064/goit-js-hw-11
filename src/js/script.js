// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { getImages } from './api';

// const PER_PAGE = 40;
// let searchQuery = '';
// let pageCount = 1;
// let isLoading = false;
// let totalPages = 0;

// const refs = {
//     formField: document.querySelector('.search-form'),
//     btnSearch: document.querySelector('.search-form>button'),
//     searchQuery: document.querySelector(
//         '.search-form input[name="searchQuery"]'
//     ),
//     gallery: document.querySelector('.gallery'),
//     btnLoad: document.querySelector('.loading-btn'),
// };

// refs.formField.addEventListener('submit', onSubmit);

// const lightBox = new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionDelay: 250,
//     disableScroll: true,
// });

// function onSubmit(e) {
//     e.preventDefault();
//     searchQuery = refs.searchQuery.value.trim();
//     if (!searchQuery) {
//         Notify.failure("We're sorry, but the search string cannot be empty!");
//         return;
//     }
//     pageCount = 1;
//     refs.gallery.innerHTML = '';
//     e.target.reset();
//     renderMarkup();
// }

// async function renderMarkup() {
//     isLoading = true;

//     try {
//         const response = await getImages(searchQuery, pageCount);
//         const { totalHits, hits } = response;
//         if (totalHits === 0) {
//             Notify.failure(
//                 'Sorry, there are no images matching your search query. Please try again.'
//             );
//             return;
//         } else if (pageCount === 1) {
//             Notify.success(`Hooray! We found ${totalHits} images.`);
//             totalPages = Math.ceil(totalHits / PER_PAGE);
//         }
//         refs.gallery.insertAdjacentHTML('beforeend', createImageMarkup(hits));
//         scroll();

//         lightBox.refresh();

//         if (pageCount === totalPages) {
//             refs.btnLoad.classList.add('is-hidden');
//         } else {
//             refs.btnLoad.classList.remove('is-hidden');
//         }
//     } catch (error) {
//         console.log(error.message);
//         Notify.failure(`Oops, something went wrong: ${error.message}`);
//     }
//     isLoading = false;
// }

// function createImageMarkup(imageList) {
//     return imageList
//         .map(
//             ({
//                 webformatURL,
//                 largeImageURL,
//                 tags,
//                 likes,
//                 views,
//                 comments,
//                 downloads,
//             }) =>
//                 `
//     <div class="photo-card">
//       <a class="gallery-link" href="${largeImageURL}">
//         <img
//           class="gallery-image"
//           src="${webformatURL}" 
//           alt="${tags}" 
//           loading="lazy" />
//       </a>
//       <div class="info">
//         <p class="info-item"><b>Likes: </b>${likes}</p>
//         <p class="info-item"><b>Views: </b>${views}</p>
//         <p class="info-item"><b>Comments: </b>${comments}</p>
//         <p class="info-item"><b>Downloads: </b>${downloads}</p>
//       </div>
      
//     </div>
//     `
//         )
//         .join('');
// }

// function onLoadMore() {
//     pageCount++;
//     renderMarkup();
// }

// function scroll() {
//     if (pageCount <= 1) {
//         return;
//     }

//     const { height: cardHeight } = document
//         .querySelector('.gallery')
//         .firstElementChild.getBoundingClientRect();

//     window.scrollBy({
//         top: cardHeight * 2,
//         behavior: 'smooth',
//     });
// }

// refs.btnLoad.addEventListener('click', loadMore);

// function loadMore() {
//     if (pageCount < totalPages) {
//         onLoadMore();
//     } else {
//         Notify.failure("We're sorry, but you've reached the end of search results.");
//         refs.btnLoad.classList.add('is-hidden');
//     }
// }

document.getElementById("openButton").addEventListener("click", function() {
    const flap = document.getElementById("flap");
    const letter = document.getElementById("letter");

    // Відкриваємо конверт
    flap.style.display = "none";
    letter.style.opacity = "1";
    letter.style.bottom = " 50px";

    generateHearts();

    // Показуємо кнопку закриття
    document.getElementById("closeButton").style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function() {
    const flap = document.getElementById("flap");
    const letter = document.getElementById("letter");

    // Закриваємо конверт
    flap.style.display = "flex";
    flap.style.transform = "rotateX(180deg)";
    letter.style.opacity = "0";
    letter.style.bottom = "-100px";

    // Ховаємо кнопку закриття
    document.getElementById("closeButton").style.display = "none";
});

function generateHearts() {
    const container = document.querySelector(".container");

    for (let i = 0; i < 50; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 200}px`;
        heart.style.bottom = "200px";
        heart.style.animationDuration = `${1 + Math.random()}s`;
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}