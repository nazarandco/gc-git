const createCalculator = () => {
  // put your code here
  let memo = 0;

  function add(num) {
    return (memo += num);
  }

  function decrease(num) {
    return (memo -= num);
  }

  function reset() {
    return (memo = 0);
  }

  function getMemo() {
    return memo;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

calc1 = createCalculator();
calc2 = createCalculator();

console.log(calc1.add(10));
console.log(calc1.add(10));
console.log(calc1.decrease(100));
console.log(calc1.reset());
console.log(calc1.getMemo());

// console.log(calc2.add(20));
// console.log(calc2.decrease(200));
// console.log(calc2.reset());
// console.log(calc2.getMemo());
