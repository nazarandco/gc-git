export const finishList = () => {
  const listBlock = document.querySelector('.list');
  const listElem5 = document.querySelector('.special');

  const listElem8 = document.createElement('li');
  listElem8.textContent = 8;

  const listElem1 = document.createElement('li');
  listElem1.textContent = 1;

  const listElem4 = document.createElement('li');
  listElem4.textContent = 4;

  const listElem6 = document.createElement('li');
  listElem6.textContent = 6;

  return (
    listBlock.append(listElem8),
    listBlock.prepend(listElem1),
    listElem5.before(listElem4),
    listElem5.after(listElem6)
  );
};

finishList();
