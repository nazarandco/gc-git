export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.log(titleElem);
  return titleElem;
};

export const getInputElement = () => {
  const inputElem = document.querySelector('text');
  console.log(inputElem);
  return inputElem;
};

getTitleElement();
getInputElement();
