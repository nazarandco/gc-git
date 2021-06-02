//put your code here

// 1. check if text is string
// 2. for loop on str length, check if some i + i + text.length === text
// 3. push all those i into array
// 4. return array.length (count of substrings)

let someString = 'kumtelyapasepasetelyatkokumtsyopasetel';

const countOccurrences = (str = '', text) => {
  // put your code here
  if (!text) {
    return null;
  }

  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str.substring(i, i + text.length) === text) {
      result += 1;
    }
  }

  return result;
};

console.log(countOccurrences(someString, 'pase'));
