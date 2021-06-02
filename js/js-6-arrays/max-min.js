// 1 // 

const numbers = [1, 3, 5, 7, 9];

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let min = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  if (min + max > 1000) {
    return true;
  } else {
    return false;
  }
}

console.log(checker(numbers));

// 2 //

//put your code here

const numbers = [1, 3, 5, 7, 9];

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  if (min + max > 1000) {
    return true;
  } else {
    return false;
  }
}

console.log(checker(numbers));

// !!! //