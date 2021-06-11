'use strict';

const withdraw = (clients, balances, client, amount) => {
  //put your code here

  const index = clients.indexOf(client);
  if (balances[index] < amount) {
    return -1;
  }

  return (balances[index] -= amount);
};
//example 1:

//input
const arrBal1 = [1400, 87, -6];
console.log(withdraw(['Ann', 'John', 'User'], arrBal1, 'John', 50));
console.log(arrBal1);

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

//output
//-1
//и массив balances должен быть [1400, 87, -6]
