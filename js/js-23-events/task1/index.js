const emailInputEl = document.querySelector('#email');
const passwordInputEl = document.querySelector('#password');

const emailErrorEl = document.querySelector('.error-text_email');
const passwordErrorEl = document.querySelector('.error-text_password');

const isRequired = (value) => (value ? undefined : 'Required');

const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(', ');
};

const onEmailChange = (event) => {
  const errorText = validate('email', event.target.value);
  emailErrorEl.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = validate('password', event.target.value);
  passwordErrorEl.textContent = errorText;
};

emailInputEl.addEventListener('input', onEmailChange);
passwordInputEl.addEventListener('input', onPasswordChange);


const formElem = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
    .reduce((acc, [field, value]) => ({ ...acc, [field]: value }), 0);

    alert(JSON.stringify(formData));
}

formElem.addEventListener('submit', onFormSubmit);