/**
 * @param {number} num
 * @return {number}
 */
function factorial(num) {
  // put your code here
  let total = 1;
  if (num >= 0 && num <= 100) {
    for (let i = 0; i < num; i += 1) {
      total = total * (num - i);
    } 
  } else {
        console.log('undefined');
    }
  return total;
}
console.log(factorial(10));
