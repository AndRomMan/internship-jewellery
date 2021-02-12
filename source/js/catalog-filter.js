'use strict';

(function () {
  let filterBlock = document.querySelector('.filter');
  let closeFilterBtn = document.querySelector('.filter__close');
  let openFilterBtn = document.querySelector('.catalog__filter-link');

  const FILTER_OPENED = 'filter--opened';

  // Инициализирует фильтр каталога
  function initFilter() {
    if (filterBlock && openFilterBtn) {
      openFilterBtn.addEventListener('click', openFilterBtnHandler);
      // подключаем обработчик 'escape' открытия модального
      window.addEventListener('keydown', escapeHAndler);
    }
  }

  // обработка кнопки закрытия
  function closeFilterBtnHandler() {
    filterBlock.classList.toggle(FILTER_OPENED);
    closeFilterBtn.removeEventListener('click', closeFilterBtnHandler);
  }

  // обработчики escape
  // вызывают функцию вывода модального из активного состояния
  function escapeHAndler(evt) {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      changeFilterState();
    }
  }

  // переключает состояние фильтра открыто-закрыто
  function changeFilterState() {
    if (filterBlock.classList.contains(FILTER_OPENED)) {
      closeFilterBtn.removeEventListener('click', closeFilterBtnHandler);
    } else {
      closeFilterBtn.addEventListener('click', closeFilterBtnHandler);
    }

    filterBlock.classList.toggle(FILTER_OPENED);
  }

  // обработка кнопки открытия фильтра
  function openFilterBtnHandler(evt) {
    evt.preventDefault();
    changeFilterState();
  }

  initFilter();
})();
