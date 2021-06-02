const getRandomNumbers = (length, from, to) => {
  // put your code here

  if (to + from < 1 && to + from > -1) {
    return null;
  }

  let min = from;
  if (min > 0) {
    min = Math.ceil(min);
  } else if (min < 0) {
    min = Math.floor(min);
  }

  let max = to;
  if (max > 0) {
    max = Math.floor(max);
  } else if (max < 0) {
    max = Math.ceil(max);
  }

  let result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(Math.round(Math.random() * (max - min) + min));
  }

  return result;
};

console.log(getRandomNumbers(5, -4.5, -6.5));

// examples
// getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
