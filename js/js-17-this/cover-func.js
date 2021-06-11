// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func(...arguments), ms);
//   };
// }

// // const getSum = (a, b) => {
// //   console.log(a + b);
// // };

// // const deferredHi = defer(getSum, 1000);

// const user = {
//     name: 'Tom',
//     sayHi() {
//         console.log(`Hi, my name is ${this.name}`)
//     }
// }

// const deferredHi = defer(user.sayHi.bind(user), 1000);

// deferredHi();

function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  },
};

const deferredHi = defer(user.sayHi, 1000);

deferredHi.call({ name: 'Bob' });
