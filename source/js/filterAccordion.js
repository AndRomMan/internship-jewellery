/* eslint-disable no-invalid-this */
'use strict';

(function () {
  let accordionBlock = document.querySelector('.filter');

  const TOGGLE_CLASS = 'filter-field__toggle';
  const FIELD_CLASS = 'filter-field';

  const TOGGLE_CLOSED_CLASS = 'filter-field__toggle--closed';
  const FIELD_CLOSED_CLASS = 'faq-list__answer--closed';

  if (accordionBlock) {
    let accordionToggles = accordionBlock.querySelectorAll('.' + TOGGLE_CLASS);
    let accordionFields = accordionBlock.querySelectorAll('.' + FIELD_CLASS);

    iniAccordion(accordionToggles, accordionFields);
  }

  function iniAccordion(toggles, fields) {
    if (toggles) {
      toggles.forEach((elem) => {
        elem.classList.toggle(TOGGLE_CLOSED_CLASS);
        elem.addEventListener('click', toggleClickHandler);
      });
    }

    if (fields) {
      fields.forEach((elem) => {
        elem.classList.toggle(FIELD_CLOSED_CLASS);
      });
    }
  }

  function toggleClickHandler(evt) {
    console.log(evt.target);

    // let questionNode = this.parentNode;
    // questionNode.classList.toggle(TOGGLE_CLOSED_CLASS);

    // let answerNode = questionNode.nextElementSibling;
    // answerNode.classList.toggle(FIELD_CLOSED_CLASS);

    // let currentQuestions = accordionBlock.querySelectorAll('.' + ACCORDION_QUESTION_CLASS);

    // currentQuestions.forEach((element) => {
    //   if (questionNode === element) {
    //     return;
    //   } else if (!element.classList.contains(CLOSED_QUESTION_CLASS)) {
    //     element.classList.toggle(CLOSED_QUESTION_CLASS);
    //     element.nextElementSibling.classList.toggle(CLOSED_ANSWER_CLASS);
    //   }
    // });
  }
})();
