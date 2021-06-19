const calc = (initialValue) => {
  let result = initialValue;

  const calculator = {
    add(value) {
      result += value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    result() {
      return result;
    },
  };

  return calculator;
};

console.log(calc(3).add(2).mult(4).div(10).subtract(5).result());
