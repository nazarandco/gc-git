export const setButton = (buttonText) => {
  const result = (document.querySelector(
    'body'
  ).innerHTML = `<button>${buttonText}</button>`);
  return result;
};

console.log(setButton('button text'));
