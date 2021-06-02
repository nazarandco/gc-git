//put your code here

const text = 'abcd efgh';
const number = 4;

const splitText = (str, part = 10) => {
  if (str.constructor !== String) {
    return null;
  }

  const strArr = [];
  let startPos = 0;

  while (true) {
    const result = str.substr(startPos, part);
    if (result.length === 0) {
      break;
    }
    strArr.push(result[0].toUpperCase() + result.slice(1));
    startPos += part;
  }

  return strArr.join('\n');
};

console.log(splitText(text, number));
