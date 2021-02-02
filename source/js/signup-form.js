'use strict';

(function () {
  // let submitSignupFormBtn = document.querySelector('.signup__btn');
  let signupUserEmail = document.querySelector('#usermail');

  const USER_EMAIL_KEY = 'usermale';

  function inputSignupEmailBlurHandler() {
    localStorage.setItem(USER_EMAIL_KEY, signupUserEmail.value);
  }

  function iniSignupEmailLocalStorage() {
    if (signupUserEmail) {
      signupUserEmail.addEventListener('blur', inputSignupEmailBlurHandler);
    }
    // submitSignupFormBtn.addEventListener('click', submitClickHandler);
  }

  iniSignupEmailLocalStorage();

  // window.loginForm = {
  //   iniEmailLocalStorage,
  // };
})();
