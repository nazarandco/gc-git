export const getSquaredNumbers = arr =>
    arr.map(num => num ** 2);

export const getOddNumbers = arr =>
    arr.filter(el => (el % 2 === 1));

export default (a, b) => a + b;