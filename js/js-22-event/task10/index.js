const btn = document.querySelectorAll('.pagination__page');

const btnFunc = (event) => {
  console.log(event.target.getAttribute('data-page-number'));
};

btn[0].addEventListener('click', btnFunc);
btn[1].addEventListener('click', btnFunc);
btn[2].addEventListener('click', btnFunc);
