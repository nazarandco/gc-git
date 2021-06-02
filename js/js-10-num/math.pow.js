const number = 111.777888333;
const hundreds = 2;

const superRound = (num, accuracy) => {
  const precision = Math.pow(10, accuracy); // = 10 * 10; // степінь - скільки разів перемножити перше число на себе самого - тобто тут 10 в 2 степіні, тобто 10*10;
  let arr = [
    Math.floor(num * precision) / precision,
    Math.round(num * precision) / precision,
    Math.ceil(num * precision) / precision,
    Math.trunc(num * precision) / precision,
    +num.toFixed(accuracy),
  ];

  return arr;
};

console.log(superRound(number, hundreds));
