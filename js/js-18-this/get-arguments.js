export function sumOfSquares() {
  return [...arguments].reduce((acc, el) => {
    return acc + el * el;
  }, 0);
}

console.log(sumOfSquares(2, 2, 2, 2));
