//put your code here

const cleanTransactionsList = (arr) => {
  const newArr = [...arr].map((el) => +el).filter((item) => !isNaN(item));

  return newArr.map((el) => `$${el.toFixed(2)}`);
};

const oldArr = ['  1.9 ', '16.4', 17, ' 1 dollar '];
console.log(cleanTransactionsList(oldArr));
console.log(oldArr);
