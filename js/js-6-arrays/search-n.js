const includes = (arr, num) => {
  // put your code here
  let n = 0;

  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (arr[i] === num) {
      n += 1;
    }
  }

  if (n > 0) {
    return true;
  } else {
    return false;
  }
};

// examples

console.log(includes([1, 4, 8, 3], 3)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false
