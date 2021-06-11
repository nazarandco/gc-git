// function task() {
  let memo = 0;

  export function getMemo() {
    return memo;
  }

  export function add(num) {
    return num + memo;
  }

  export function decrease(num) {
    return num - memo;
  }

  export function reset() {
    return (memo = 0);
  }

//   return {
//     add,
//     decrease,
//     reset,
//     getMemo,
//   };
// }

// const result = task();

console.log(result.add(8));
console.log(result.decrease(5));
console.log(result.getMemo());
console.log(result.reset());
