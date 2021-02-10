/* eslint-disable no-unused-vars */
'use strict';

(function () {
  let swiperCatalog;
  let sliderContainer = document.querySelector('.catalog__slider');
  let sliderNavigation = document.querySelector('.catalog__slider-navigation');

  function iniCatalogSwiper() {
    swiperCatalog = new window.Swiper('.catalog__slider', {
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

  function iniCatalogSlider() {
    if (sliderContainer && sliderNavigation) {
      iniCatalogSwiper();
    }
  }

  iniCatalogSlider();
})();
