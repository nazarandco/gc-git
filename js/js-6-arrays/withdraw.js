//put your code here

let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];
let client = 'User';
let amount = 50;

function withdraw(clients, balances, client, amount) {
  let rest = 0;
  for (let i = 0; i <= clients.length; i += 1) {
    if (clients[i] === client) {
      rest = balances[i] - amount;
    }
  }
  if (rest < 0) {
    return -1;
  }
  return rest;
}

console.log(withdraw(clients, balances, client, amount));


// ----- //

'use strict';

let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];
let client = 'User';
let amount = 50;

const withdraw = (clients, balances, client, amount) => {
  //put your code here

  let rest = 0;

  clients.forEach((name, index) => {
    if (name.includes(client)) {
      rest = balances[index] - amount;
    }
  });

  if (rest < 0) {
    return -1;
  }

  return rest;
};

console.log(withdraw(clients, balances, client, amount));
