const inputElem = document.querySelector('.text-input');

const inputLog = () => {
  console.log((inputElem.innerHTML = inputElem.value));
};

inputElem.addEventListener('change', () => inputLog());
