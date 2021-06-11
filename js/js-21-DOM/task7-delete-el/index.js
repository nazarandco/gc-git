export const clearList = () => {
  const result = document.querySelector('.categories');
  return result.innerHTML = '';
};

clearList();