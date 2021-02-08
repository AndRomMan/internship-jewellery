'use strict';

(function () {
  let swiper;
  let sliderContainer = document.querySelector('.catalog__slider');

  function iniCatalogSwiper() {
    swiper = new window.Swiper('.catalog__slider', {
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: document.querySelector('.catalog-slider-navigation__pagination'),
        clickable: 'true',
        renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },

      navigation: {
        nextEl: '.catalog-slider-navigation__btn--next',
        prevEl: '.catalog-slider-navigation__btn--prev',
      },
    });
  }

  function iniSlider() {
    if (sliderContainer) {
      iniCatalogSwiper();
    }
  }

  iniSlider();
})();
