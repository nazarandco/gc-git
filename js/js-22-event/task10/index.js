const btnFunc = (event) => {
  console.log(event.target.getAttribute('data-page-number'));
};

document.querySelector('.pagination').addEventListener('click', btnFunc);
