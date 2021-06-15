// put your code here
const btnSingElem = document.querySelector('.single-use-btn');

const btnFunc = () => {
  console.log('clicked');
};

let count = 0;

btnSingElem.addEventListener('click', () => {
  count += 1;
  if (count > 1) {
    return;
  }
  btnFunc();
});
