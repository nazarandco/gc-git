//put your code here

let numbers = [1, 5, 3, 8, 12, 2, 4, 20];

function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array.reverse(array);
}

console.log(sortAsc(numbers));
console.log(sortDesc(numbers));
