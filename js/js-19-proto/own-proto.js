const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

// console.log(typeof vehicle.name === 'function');

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    ship.move();
  },
  stopMachine() {
    ship.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle,
};

// console.log(typeof ship.startMachine === 'function');

function getOwnProps(obj) {
  let propArr = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      propArr.push(prop);
    }
  }

  return propArr;
}

console.log(getOwnProps(ship));
