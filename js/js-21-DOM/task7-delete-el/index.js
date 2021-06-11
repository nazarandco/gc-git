export const clearList = () => {
  const result = (document.querySelector('.categories').innerHTML = '  ');
  return result;
};

clearList();