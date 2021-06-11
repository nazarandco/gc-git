export const clearList = () => {
  const result = (document.querySelector('.categories').innerHTML = ` `);
  return result;
};

console.log(clearList());
