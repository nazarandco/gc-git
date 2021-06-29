const baseUrl = 'https://60d49bf961160900173cbb6b.mockapi.io/api/v1/submitters';

const inputElements = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorWrapper = document.querySelector('.error-text');

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
  errorWrapper.innerHTML = '';
};

userEmail.addEventListener('input', onDataPut);
userName.addEventListener('input', onDataPut);
userPassword.addEventListener('input', onDataPut);

const onCreateUser = (e) => {
  e.preventDefault();

  // const formData = [...new FormData(inputElements)].reduce(
  //   (acc, [field, value]) => ({ ...acc, [field]: value }),
  //   0
  // );

  const formData = Object.fromEntries(new FormData(inputElements));

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      }

      throw new Error();
    })
    .then((tasks) => {
      alert(JSON.stringify(tasks));
      submitBtn.disabled = true;
      inputElements.reset();
    })
    .catch(() => {
      errorWrapper.innerHTML = 'Failed to create user';
    });
};

inputElements.addEventListener('submit', onCreateUser);
