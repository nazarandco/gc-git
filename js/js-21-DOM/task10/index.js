export const finishForm = () => {
  const logForm = document.querySelector('.login-form');

  const login = document.createElement('input');
  login.setAttribute('type', 'text');
  login.setAttribute('name', 'login');

  const lastChildEl = logForm.children[0];
  lastChildEl.setAttribute('type', 'password');
  lastChildEl.setAttribute('name', 'password');

  return logForm.prepend(login);
};

console.log(finishForm());
