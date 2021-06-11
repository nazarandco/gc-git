export const finishList = () => {
  const listBlock = document.querySelector('.list');
  const listElem5 = document.querySelector('.special');

  const listElem1 = document.createElement('li');
  listElem1.textContent = '1';
  listBlock.prepend(listElem1);

  const listElem4 = document.createElement('li');
  listElem4.textContent = '4';
  listElem5.before(listElem4);

  const listElem6 = document.createElement('li');
  listElem6.textContent = '6';
  listElem5.after(listElem6);

  const listElem8 = document.createElement('li');
  listElem8.textContent = '8';
  listBlock.append(listElem8);
};

finishList();
