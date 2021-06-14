// put your code here
const btnSingElem = document.querySelector('.single-use-btn');

btnSingElem.addEventListener(
  'click',
  () => {
    console.log('clicked');
  },
  { once: true }
);
