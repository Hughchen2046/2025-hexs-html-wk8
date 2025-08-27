// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  spaceBetween: 16,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 0,
    slideShadows: true,
  },
  pagination: {
    el: ".recommend-pagination",
    clickable: true,
  },
  breakpoints: {
    // "@0.00": {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    // },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
}

);

const btnSwiper = new Swiper(".btn-swiper", {
  watchSlidesProgress: true,
  grabCursor: true,
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 8,
}
);

const mapSwiper = new Swiper(".map-swipers", {
  watchSlidesProgress: true,
  grabCursor: true,
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 16,
  navigation: {
    nextEl: ".map-swipers-btn-next",
    prevEl: ".map-swipers-btn-prev",
  },
  pagination: {
    el: ".map-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      spaceBetween: 24,
    },
  },
}
);

const journeySwiper = new Swiper(".journey-swipers", {
  watchSlidesProgress: false,
  grabCursor: true,
  freeMode: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".journey-swipers-btn-next",
    prevEl: ".journey-swipers-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",
    },
    992: {
      slidesPerView: 4,
      freeMode: false,
    },
  },
}
);
