const btnElem = document.querySelector('.single-use-btn');

const clickBtn = () => {
  console.log('clicked');
};

btnElem.addEventListener('click', () => clickBtn(), { once: true });
