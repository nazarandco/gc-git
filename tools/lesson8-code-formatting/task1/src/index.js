// file path: src/index.js

import printProfile from './renderProfile';

const userData = {
  name: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);

const num = 17;

// eslint-disable
if (num === 18) {
  // eslint-disable-next-line no-alert
  alert('Hi');
}
// eslint-enable
