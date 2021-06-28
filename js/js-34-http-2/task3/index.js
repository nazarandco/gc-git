const baseUrl = 'https://60d49bf961160900173cbb6b.mockapi.io/api/v1/submitters';

const inputElements = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorWraper = document.querySelector('.error-text');
// inputElements.addEventListener('input', onDataPut);

const userEmail = document.getElementById('email');
const userName = document.getElementById('name');
const userPassword = document.getElementById('password');

const onDataPut = () => {
  if (
    userEmail.reportValidity() &&
    userName.reportValidity() &&
    userPassword.reportValidity()
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
  errorWraper.innerHTML = '';
};

userEmail.addEventListener('input', onDataPut);
userName.addEventListener('input', onDataPut);
userPassword.addEventListener('input', onDataPut);

// const resultData = onDataPut();
// console.log(resultData);

const onCreateUser = (e) => {
  console.log('e', e);
  e.preventDefault();

  const testObj = {
    email: userEmail.value,
    userName: userName.value,
    password: userPassword.value,
  };

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(testObj),
  })
    .then((responce) => {
      if (responce.status === 201) {
        return responce.json();
      }

      throw new Error('Failed to create user');
    })
    .then((tasks) => {
      console.log('tasks', tasks);
      submitBtn.disabled = true;
      inputElements.reset();
    })
    .catch((err) => {
      errorWraper.innerHTML = err;
    });
};

submitBtn.addEventListener('click', onCreateUser);
