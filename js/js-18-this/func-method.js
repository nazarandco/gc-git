const saveCalls = (func) => {
  const calls = [];

  function withMemory(...args) {
    calls.push(args);
    return func.apply(this);
  }

  withMemory.calls = calls;
  return withMemory;
};

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);

console.log(testWithMemory.calls); // [ [4, 2], [9, 1] ]

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

console.log(methodWithMemory.apply({ name: 'Tom' })); // 'Tom'

console.log(methodWithMemory.calls); // [ [] ]
