const inputEl = document.querySelector('.text-input');

const inputFunc = (event) => {
  console.log(event.target.value);
};

inputEl.addEventListener('change', inputFunc);
