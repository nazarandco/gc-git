export const reverseArray = (array) => {
  if (!Array.isArray(array)) {
    return null;
  }

  let reversedArr = [...array];
  return reversedArr.reverse();
};

