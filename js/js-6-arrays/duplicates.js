//put your code here

const num = [1, 4, 1, 8, 3, 4, 8, 8];

function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let unique = [...new Set(array)];

  return unique.length;
}

console.log(uniqueCount(num));
