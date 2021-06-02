const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrew' },
    { name: 'Ann' },
    { name: 'Vasco' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = (obj) => {
  // put your code here
  const names = Object.values(obj)
    .flat(1)
    .map((el) => el.name);

  return names;
};

console.log(getPeople(rooms));
