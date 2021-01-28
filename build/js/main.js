'use strict';

(function () {})();
'use strict';

(function () {
  var HEADER_MENU = 'header--menu';
  var LOGO_MENU = 'logo--menu';
  var SEARCH_FORM_MENU = 'search-form--menu';
  var CART_LINK_MENU = 'cart-link--menu';
  var NAVBAR_MENU = 'navbar--menu';
  var NAVBAR_JS = 'navbar--js';
  var BURGER_BTN_JS = 'burger-btn--js';
  var BURGER_BTN_MENU = 'burger-btn--menu';
  var burgerBtn = document.querySelector('.burger-btn');
  var header = document.querySelector('.header');
  var logo = document.querySelector('.logo');
  var searchForm = document.querySelector('.search-form');
  var cartLink = document.querySelector('.cart-link');
  var navbar = document.querySelector('.navbar');

  function iniMenu() {
    if (burgerBtn) {
      burgerBtn.addEventListener('click', burgerBtnClickHandler);
      burgerBtn.classList.toggle(BURGER_BTN_JS);
    }

    if (navbar) {
      navbar.classList.toggle(NAVBAR_JS);
    }

    if (header) {
      header.classList.toggle(HEADER_MENU);
    }

    if (logo) {
      logo.classList.toggle(LOGO_MENU);
    }

    if (cartLink) {
      cartLink.classList.toggle(CART_LINK_MENU);
    }

    if (searchForm) {
      searchForm.classList.toggle(SEARCH_FORM_MENU);
    }

    if (navbar) {
      navbar.classList.toggle(NAVBAR_MENU);
    }
  }

  iniMenu();

  function burgerBtnClickHandler(evt) {
    console.log(evt.type);

    if (burgerBtn) {
      burgerBtn.classList.toggle(BURGER_BTN_MENU);
    }

    if (header) {
      header.classList.toggle(HEADER_MENU);
    }

    if (logo) {
      logo.classList.toggle(LOGO_MENU);
    }

    if (cartLink) {
      cartLink.classList.toggle(CART_LINK_MENU);
    }

    if (searchForm) {
      searchForm.classList.toggle(SEARCH_FORM_MENU);
    }

    if (navbar) {
      navbar.classList.toggle(NAVBAR_MENU);
    }
  }
})();
'use strict';

(function () {
  var paginationBlock = document.querySelector('.slider__pagination');
  var currentDotOut = document.querySelector('.slider__current');
  var totalDotsOut = document.querySelector('.slider__total');
  var ACTIVE_BULLET_CLASS = 'swiper-pagination-bullet-active';
  var BREAKPOINT_MOBILE = 767;
  var swiper = new window.Swiper('.swiper-container', {
    loop: true,
    slidesPerGroup: 2,
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 30,
    centeredSlidesBounds: true,
    pagination: {
      el: document.querySelector('.slider__pagination'),
      clickable: 'true',
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev'
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1023: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1169: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  });

  function getBullets() {
    var bullets;

    if (paginationBlock) {
      bullets = paginationBlock.children;
    }

    return bullets;
  }

  function setMobileTotalBullet(bullets) {
    var totalBullets = bullets.length;
    return totalBullets;
  }

  function setMobileCurrentBullet(bullets) {
    var currentBullet;
    Array.from(bullets).forEach(function (element) {
      if (element.classList.contains(ACTIVE_BULLET_CLASS)) {
        currentBullet = +element.textContent;
      }
    });
    return currentBullet;
  }

  function renderMobilePagination(bullets) {
    totalDotsOut.textContent = setMobileTotalBullet(bullets);
    currentDotOut.textContent = setMobileCurrentBullet(bullets);
  }

  function realIndexChangeHandler(bullets) {
    swiper.on('transitionEnd', function () {
      renderMobilePagination(bullets);
    });
  }

  function setMobilePagination() {
    var bullets = getBullets();
    realIndexChangeHandler(bullets);
  }

  function breakpointChangeHandler() {
    var viewport = document.documentElement.clientWidth;

    if (viewport < BREAKPOINT_MOBILE) {
      setMobilePagination();
    }
  }

  function iniMobilePagination() {
    var bullets = getBullets();
    renderMobilePagination(bullets);
  }

  if (swiper) {
    iniMobilePagination();
    breakpointChangeHandler();
    swiper.on('breakpoint', breakpointChangeHandler);
  }
})();
//# sourceMappingURL=main.js.map
