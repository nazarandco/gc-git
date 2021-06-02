export const minSqNum = (arr) => {
  if (arr.constructor !== Array || arr.length === 0) {
    return null;
  }

  let abs = arr.map((el) => Math.abs(el));
  let min = Math.min(...abs) ** 2;

  return min;
};
