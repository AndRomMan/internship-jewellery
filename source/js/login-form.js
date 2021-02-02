'use strict';

(function () {
  // let submitFormBtn = document.querySelector('.login__btn');
  let loginUserEmail = document.querySelector('#useremail');

  const USER_EMAIL_KEY = 'usermale';

  // проверка доступности localStorage
  // function storageAvailable(type) {
  //   try {
  //     let storage = window[type];
  //     let x = '__storage_test__';
  //     storage.setItem(x, x);
  //     storage.removeItem(x);
  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // }

  // обработчик click submit для формы регистрации и подписки
  // function submitClickHandler(evt) {
  //   // evt.preventDefault();

  //   console.log(`localStorage.length = ${localStorage.length}`);

  //   if (storageAvailable('localStorage')) {
  //     let name = localStorage.getItem(USER_EMAIL_KEY);
  //     console.log(name);

  //     console.log(`localStorage.length = ${localStorage.length}`);
  //   } else {
  //     console.log('We can not use Local Storage');
  //   }
  // }

  function inputLoginEmailBlurHandler() {
    localStorage.setItem(USER_EMAIL_KEY, loginUserEmail.value);
  }

  function iniLoginEmailLocalStorage() {
    if (loginUserEmail) {
      loginUserEmail.addEventListener('blur', inputLoginEmailBlurHandler);
    }

    // submitFormBtn.addEventListener('click', submitClickHandler);
  }

  iniLoginEmailLocalStorage();

  // window.loginForm = {
  //   iniEmailLocalStorage,
  // };
})();
