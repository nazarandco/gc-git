//put your code here

const mult = (a) => (b) => a * b;

const result = mult(5)(4);
console.log(result);

const twice = (a) => mult(a)(2);
console.log(twice(7));

const triple = (a) => mult(a)(3);
console.log(triple(9));
