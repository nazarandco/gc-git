//put your code here

const names = ['John', 'Oliviya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];
const text = 'ya';

const filterNames = (arr, text) => {
  let filtered = arr.filter((name) => name.includes(text) && name.length > 5);

  return filtered;
};

console.log(filterNames(names, text));
