export const clearList = () => {
  const delete = (document.querySelector('.categories').innerHTML = '');
  return delete;
};
