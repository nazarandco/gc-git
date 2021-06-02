//put your code here

const floatNum = [-2, 17, 8];

const getMaxAbsoluteNumber = (arr) => {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return null;
  }

  const absNum = arr.map((num) => Math.abs(num));

  const maxNum = Math.max(...absNum);

  return maxNum;
};

console.log(getMaxAbsoluteNumber(floatNum));
