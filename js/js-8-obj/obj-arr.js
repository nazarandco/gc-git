const obj = { a: 1, b: 2, c: 3 };
const props = ['a', 'c', 'd', 'hex'];

const pickProps = (obj, props) => {
  // put your code here

  let match = {};

  for (let key in obj) {
    for (let item of props) {
      if (key == item) {
        match[key] = obj[key];
      }
    }
  }

  return match;
};

console.log(pickProps(obj, props));
