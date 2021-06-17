const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = (e) => {
  const isButton = e.target.classList.contains('counter__button');

  if (!isButton) {
    return;
  }

  const action = e.target.dataset.action; // присвоїли значення дата-атрибуту саме тої кнопки, по якій здійснився клік
  // console.log(action); - виведе це значення

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);

  counterValueElem.textContent = newValue;
};

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = (e) => {
  // console.log(e); -- event це об'єкт, серед властивостей якого є і
  // newValue, де вже вказана потрібна цифра з минулих калькуляцій
  counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
