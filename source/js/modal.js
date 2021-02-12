'use strict';

(function () {
  let pageBody = document.querySelector('body');
  let modal = document.querySelector('.modal');

  let loginLinks = document.querySelectorAll('.login-link-js');
  let closeLoginFormBtn = document.querySelector('.login__close');

  let activeElements = [];
  let maxTabIndexNum;

  let inputFocused = document.querySelector('#useremail');

  const BODY_OVERFLOW = 'body--overflow';
  const MODAL_OPENED = 'modal--opened';
  const MODAL_OVERLAY = 'modal';

  // находим все элементы внутри модального окна
  function findModalElements() {
    let elements = modal.querySelectorAll('*');
    // вызываем функцию заполнения массива активных элементов модального
    setActiveElementArray(elements);
  }

  // заполняем массив активных элементов модального
  function setActiveElementArray(elements) {
    elements.forEach((element) => {
      let tag = element.tagName;
      if (tag === 'A' || tag === 'INPUT' || tag === 'BUTTON' || tag === 'TEXTAREA') {
        activeElements.push(element);
      }
    });
  }

  // устанавливаем порядок перехода (tabindex) по активным элементам модального
  // навешиваем обработчики "потери фокуса" на активные элементы
  function setTabindexActiveElements() {
    maxTabIndexNum = activeElements.length;

    for (let i = 0; i < activeElements.length; i++) {
      activeElements[i].setAttribute('tabindex', '' + (i + 1));
      activeElements[i].addEventListener('blur', activeElementBlurHandler);
    }
  }

  // обработчик события "потеря фокуса" на активном элементе
  function activeElementBlurHandler(evt) {
    let currentTabIndex = evt.target.getAttribute('tabindex');

    // если фокус потерян на последнем элементе массива активных элементов,
    // то перейти к первому элементу в массиве
    if (+currentTabIndex === maxTabIndexNum) {
      activeElements[0].focus();
    }
  }

  // предотвращаем уход из модального при переходе по tab
  function setModalActiveElements() {
    findModalElements();
    setTabindexActiveElements();
  }

  // отключаем обработчики события "потеря фокуса"
  function resetTabindexActiveElements() {
    activeElements.forEach((element) => {
      element.removeEventListener('blur', activeElementBlurHandler);
    });
  }

  // инициализации перключателей для вызова модального окна
  initModalToggles();

  function initModalToggles() {
    if (loginLinks) {
      setModalTogglesClickHandler(loginLinks);
    }
  }

  // функция навешивает на все линки обработчики клика
  function setModalTogglesClickHandler(array) {
    if (array) {
      array.forEach((element) => {
        element.addEventListener('click', toggleClickHandler);
      });
    }
  }

  // обработчик клика вызывает функцию активации модального окна
  function toggleClickHandler(evt) {
    evt.preventDefault();

    setModalActiveState();
  }

  // активации модального окна
  function setModalActiveState() {
    if (modal) {
      // открываем модальное
      modal.classList.toggle(MODAL_OPENED);
      // предотвращение прокрутки body при открытом модальном
      pageBody.classList.toggle(BODY_OVERFLOW);

      // ставим фокус на input
      inputFocused.focus();
    }

    // подключаем обработчик 'escape' открытия модального
    window.addEventListener('keydown', escapeHAndler);

    // подключаем обработчик кнопки закрытия модального (X)
    if (closeLoginFormBtn) {
      closeLoginFormBtn.addEventListener('click', closeBtnClickHandler);
    }

    if (modal) {
      modal.addEventListener('click', overlayClickHandler);
    }

    // вызов функции предотвращения ухода из модального при переходе по tab
    setModalActiveElements();
  }

  // обработчики клика (X), escape и клика по overlay-области модального
  // вызывают функцию вывода модального из активного состояния
  function escapeHAndler(evt) {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      setModalInactiveState();
    }
  }

  // обработчик клика по кнопке закрытия модального (X)
  function closeBtnClickHandler() {
    setModalInactiveState();
  }

  // обработчик клика по overlay-области
  function overlayClickHandler(evt) {
    let element = evt.target;

    if (element.classList.contains(MODAL_OVERLAY)) {
      setModalInactiveState();
    } else {
      return;
    }
  }

  // ============================================================================
  // ВЫВОД модального из активного состояния
  function setModalInactiveState() {
    modal.classList.toggle(MODAL_OPENED);
    pageBody.classList.toggle(BODY_OVERFLOW);

    // отключаем обработчики
    window.removeEventListener('keydown', escapeHAndler);
    closeLoginFormBtn.removeEventListener('click', closeBtnClickHandler);
    modal.removeEventListener('click', overlayClickHandler);
    // вызов функции, отключающей обработчики событий активных элементов
    resetTabindexActiveElements();
  }
})();
