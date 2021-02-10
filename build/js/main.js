'use strict';

(function () {
  var accordionBlock = document.querySelector('.faq-list');
  var ACCORDION_TOGGLE_CLASS = 'faq-list__btn';
  var ACCORDION_ANSWER_CLASS = 'faq-list__answer';
  var ACCORDION_QUESTION_CLASS = 'faq-list__question';
  var CLOSED_ANSWER_CLASS = 'faq-list__answer--closed';
  var CLOSED_QUESTION_CLASS = 'faq-list__question--closed';

  function iniAccordion(quesions, answers, toggles) {
    if (quesions) {
      quesions.forEach(function (elem) {
        elem.classList.toggle(CLOSED_QUESTION_CLASS);
      });
    }

    if (answers) {
      answers.forEach(function (elem) {
        elem.classList.toggle(CLOSED_ANSWER_CLASS);
      });
    }

    if (toggles) {
      toggles.forEach(function (elem) {
        elem.addEventListener('click', toggleClickHandler);
      });
    }
  }

  function toggleClickHandler() {
    var questionNode = this.parentNode;
    questionNode.classList.toggle(CLOSED_QUESTION_CLASS);
    var answerNode = questionNode.nextElementSibling;
    answerNode.classList.toggle(CLOSED_ANSWER_CLASS);
    var currentQuestions = accordionBlock.querySelectorAll('.' + ACCORDION_QUESTION_CLASS);
    currentQuestions.forEach(function (element) {
      if (questionNode === element) {
        return;
      } else if (!element.classList.contains(CLOSED_QUESTION_CLASS)) {
        element.classList.toggle(CLOSED_QUESTION_CLASS);
        element.nextElementSibling.classList.toggle(CLOSED_ANSWER_CLASS);
      }
    });
  }

  if (accordionBlock) {
    var accordionQuestions = accordionBlock.querySelectorAll('.' + ACCORDION_QUESTION_CLASS);
    var accordionAnswers = accordionBlock.querySelectorAll('.' + ACCORDION_ANSWER_CLASS);
    var accordionToggles = accordionBlock.querySelectorAll('.' + ACCORDION_TOGGLE_CLASS);
    iniAccordion(accordionQuestions, accordionAnswers, accordionToggles);
  }
})();
'use strict';

(function () {
  var filterBlock = document.querySelector('.filter');
  var closeFilterBtn = document.querySelector('.filter__close');
  var openFilterBtn = document.querySelector('.catalog__filter-link');
  var FILTER_OPENED = 'filter--opened';

  function iniFilter() {
    if (filterBlock && openFilterBtn) {
      openFilterBtn.addEventListener('click', openFilterBtnHandler);
      window.addEventListener('keydown', escapeHAndler);
    }
  }

  function closeFilterBtnHandler() {
    filterBlock.classList.toggle(FILTER_OPENED);
    closeFilterBtn.removeEventListener('click', closeFilterBtnHandler);
  }

  function escapeHAndler(evt) {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      changeFilterState();
    }
  }

  function changeFilterState() {
    if (filterBlock.classList.contains(FILTER_OPENED)) {
      closeFilterBtn.removeEventListener('click', closeFilterBtnHandler);
    } else {
      closeFilterBtn.addEventListener('click', closeFilterBtnHandler);
    }

    filterBlock.classList.toggle(FILTER_OPENED);
  }

  function openFilterBtnHandler(evt) {
    evt.preventDefault();
    changeFilterState();
  }

  iniFilter();
})();
'use strict';

(function () {
  var swiperCatalog;
  var sliderContainer = document.querySelector('.catalog__slider');
  var sliderNavigation = document.querySelector('.catalog__slider-navigation');

  function iniCatalogSwiper() {
    swiperCatalog = new window.Swiper('.catalog__slider', {
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: document.querySelector('.catalog-slider-navigation__pagination'),
        clickable: 'true',
        renderBullet: function renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
      navigation: {
        nextEl: '.catalog-slider-navigation__btn--next',
        prevEl: '.catalog-slider-navigation__btn--prev'
      }
    });
  }

  function iniCatalogSlider() {
    if (sliderContainer && sliderNavigation) {
      iniCatalogSwiper();
    }
  }

  iniCatalogSlider();
})();
'use strict';

(function () {
  var accordionBlock = document.querySelector('.filter__form');
  var FIELD_CLASS = 'filter-field';
  var TOGGLE_CLASS = 'filter-field__toggle';
  var FIELD_CLOSED_CLASS = 'filter-field--closed';

  if (accordionBlock) {
    var accordionToggles = accordionBlock.querySelectorAll('.' + TOGGLE_CLASS);
    var accordionFields = accordionBlock.querySelectorAll('.' + FIELD_CLASS);

    if (accordionToggles && accordionFields) {
      iniAccordion(accordionFields, accordionToggles);
    }
  }

  function iniAccordion(fields, toggles) {
    fields.forEach(function (elem) {
      elem.classList.toggle(FIELD_CLOSED_CLASS);
    });
    toggles.forEach(function (elem) {
      elem.addEventListener('click', toggleClickHandler);
    });
  }

  function toggleClickHandler() {
    var currentField = this.parentNode;
    currentField.classList.toggle(FIELD_CLOSED_CLASS);
  }
})();
'use strict';

(function () {
  var loginUserEmail = document.querySelector('#useremail');
  var USER_EMAIL_KEY = 'usermale';

  function inputLoginEmailBlurHandler() {
    localStorage.setItem(USER_EMAIL_KEY, loginUserEmail.value);
  }

  function iniLoginEmailLocalStorage() {
    if (loginUserEmail) {
      loginUserEmail.addEventListener('blur', inputLoginEmailBlurHandler);
    }
  }

  iniLoginEmailLocalStorage();
})();
'use strict';

(function () {})();
'use strict';

(function () {
  var swiper;
  var sliderContainer = document.querySelector('.swiper-container');
  var paginationBlock = document.querySelector('.slider-pagination');
  var currentDotOut = document.querySelector('.slider-mobile-pagination__current');
  var totalDotsOut = document.querySelector('.slider-mobile-pagination__total');
  var ACTIVE_BULLET_CLASS = 'swiper-pagination-bullet-active';
  var BREAKPOINT_MOBILE = 767;

  function iniSwiper() {
    swiper = new window.Swiper('.swiper-main', {
      loop: true,
      slidesPerGroup: 2,
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30,
      centeredSlidesBounds: true,
      pagination: {
        el: document.querySelector('.slider-pagination'),
        clickable: 'true',
        renderBullet: function renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
      navigation: {
        nextEl: '.slider-buttons__item--next',
        prevEl: '.slider-buttons__item--prev'
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
  }

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

  function iniSlider() {
    if (sliderContainer) {
      iniSwiper();

      if (swiper && paginationBlock && currentDotOut && totalDotsOut) {
        iniMobilePagination();
        breakpointChangeHandler();
        swiper.on('breakpoint', breakpointChangeHandler);
      }
    }
  }

  iniSlider();
})();
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

  function burgerBtnClickHandler() {
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
  var pageBody = document.querySelector('body');
  var modal = document.querySelector('.modal');
  var loginLinks = document.querySelectorAll('.login-link-js');
  var closeLoginFormBtn = document.querySelector('.login__close');
  var activeElements = [];
  var maxTabIndexNum;
  var inputFocused = document.querySelector('#useremail');
  var BODY_OVERFLOW = 'body--overflow';
  var MODAL_OPENED = 'modal--opened';
  var MODAL_OVERLAY = 'modal';

  function findModalElements() {
    var elements = modal.querySelectorAll('*');
    setActiveElementArray(elements);
  }

  function setActiveElementArray(elements) {
    elements.forEach(function (element) {
      var tag = element.tagName;

      if (tag === 'A' || tag === 'INPUT' || tag === 'BUTTON' || tag === 'TEXTAREA') {
        activeElements.push(element);
      }
    });
  }

  function setTabindexActiveElements() {
    maxTabIndexNum = activeElements.length;

    for (var i = 0; i < activeElements.length; i++) {
      activeElements[i].setAttribute('tabindex', '' + (i + 1));
      activeElements[i].addEventListener('blur', activeElementBlurHandler);
    }
  }

  function activeElementBlurHandler(evt) {
    var currentTabIndex = evt.target.getAttribute('tabindex');

    if (+currentTabIndex === maxTabIndexNum) {
      activeElements[0].focus();
    }
  }

  function setModalActiveElements() {
    findModalElements();
    setTabindexActiveElements();
  }

  function resetTabindexActiveElements() {
    activeElements.forEach(function (element) {
      element.removeEventListener('blur', activeElementBlurHandler);
    });
  }

  iniModalToggles();

  function iniModalToggles() {
    if (loginLinks) {
      setModalTogglesClickHandler(loginLinks);
    }
  }

  function setModalTogglesClickHandler(array) {
    if (array) {
      array.forEach(function (element) {
        element.addEventListener('click', toggleClickHandler);
      });
    }
  }

  function toggleClickHandler(evt) {
    evt.preventDefault();
    setModalActiveState();
  }

  function setModalActiveState() {
    if (modal) {
      modal.classList.toggle(MODAL_OPENED);
      pageBody.classList.toggle(BODY_OVERFLOW);
      inputFocused.focus();
    }

    window.addEventListener('keydown', escapeHAndler);

    if (closeLoginFormBtn) {
      closeLoginFormBtn.addEventListener('click', closeBtnClickHandler);
    }

    if (modal) {
      modal.addEventListener('click', overlayClickHandler);
    }

    setModalActiveElements();
  }

  function escapeHAndler(evt) {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      setModalInactiveState();
    }
  }

  function closeBtnClickHandler() {
    setModalInactiveState();
  }

  function overlayClickHandler(evt) {
    var element = evt.target;

    if (element.classList.contains(MODAL_OVERLAY)) {
      setModalInactiveState();
    } else {
      return;
    }
  }

  function setModalInactiveState() {
    modal.classList.toggle(MODAL_OPENED);
    pageBody.classList.toggle(BODY_OVERFLOW);
    window.removeEventListener('keydown', escapeHAndler);
    closeLoginFormBtn.removeEventListener('click', closeBtnClickHandler);
    modal.removeEventListener('click', overlayClickHandler);
    resetTabindexActiveElements();
  }
})();
'use strict';

(function () {
  var signupUserEmail = document.querySelector('#usermail');
  var USER_EMAIL_KEY = 'usermale';

  function inputSignupEmailBlurHandler() {
    localStorage.setItem(USER_EMAIL_KEY, signupUserEmail.value);
  }

  function iniSignupEmailLocalStorage() {
    if (signupUserEmail) {
      signupUserEmail.addEventListener('blur', inputSignupEmailBlurHandler);
    }
  }

  iniSignupEmailLocalStorage();
})();
//# sourceMappingURL=main.js.map
