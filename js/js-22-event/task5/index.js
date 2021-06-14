const btnElem = document.querySelector('.search__btn');
const inputElem = document.querySelector('.search__input');

btnElem.addEventListener('click', () => {
  console.log(inputElem.value);
});
