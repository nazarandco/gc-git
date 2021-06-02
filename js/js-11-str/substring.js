/// ТАРАСА РІШЕННЯ

let someString = '123 5678912 312ssdfsd sfdsfsd  fsdf sd fsd';

const splitString = (str, count) => {
  let result = [];

  let dotsCount = str.length % count;

  if (count >= str.length) {
    let dots = new Array(dotsCount + 1).join('.');
    for (let dot of dots) {
      str += dot;
    }
    return [str];
  }

  for (let i = 0; i < str.length; i += count) {
    if (i + count >= str.length) {
      let dots = new Array(dotsCount + 1).join('.');
      for (let dot of dots) {
        str += dot;
      }
      result.push(str.substring(i, i + count));
      break;
    }
    result.push(str.substring(i, i + count));
  }

  return result;
};

console.log(splitString(someString, 4));

/// МОЄ РІШЕННЯ +/-

let someString = '123 5678912 312ssdfsd sfdsfsd  fsdf sd fsd';

const splitString = (str, count = 10) => {
  if (str.constructor !== String) {
    return null;
  }
  let result = [];

  for (let i = 0; i < str.length; i += count) {
    if (i + count > str.length) {
      let dots = new Array(count);
      dots.fill('.');
      for (let dot of dots) {
        str += dot;
      }
      result.push(str.substring(i, i + count));
      break;
    }
    result.push(str.substring(i, i + count));
  }

  return result;
};

console.log(splitString(someString, 7));
