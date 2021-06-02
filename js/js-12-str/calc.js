//put your code here

const calc = (str) => {
  let [a, operand, b] = str.split(' ');
  let result = 0;

  switch (operand) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      console.log('Only +, -, *, / are allowed!');
  }

  return `${str} = ${result}`;
};

console.log(calc('3 / 4'));
