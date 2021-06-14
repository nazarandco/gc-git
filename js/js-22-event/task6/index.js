// put your code here
const btnSingElem = document.querySelector('.single-use-btn');

const btnFunc = () => {
  console.log('clicked');
};

btnSingElem.addEventListener('click', btnFunc, { once: true });
