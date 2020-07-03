new Swiper('.my-works-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  wrapperClass: 'my-works-slider__list',
  slideClass: 'my-works-slider__element',
  pagination: {
    el: '.my-works-slider__pagination',
    type: 'bullets',
    bulletClass: 'pagination__element',
    bulletActiveClass: 'pagination__element--active',
    clickable: true
  },
  navigation: {
    nextEl: '.my-works-slider__control-btn--next',
    prevEl: '.my-works-slider__control-btn--prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 25,
    }
  },
});
