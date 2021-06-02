'use strict';

export const withdraw = (clients, balances, client, amount) => {
  //put your code here

  let rest = 0;

  clients.forEach((name, index) => {
    if (name.includes(client)) {
      rest = balances[index] - amount;
    }
  });

  if (rest <= 0) {
    return -1;
  }

  return rest;
};

//example 1:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', ));

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

//output
//-1
//и массив balances должен быть [1400, 87, -6]
