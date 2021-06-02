//put your code here

const contactsArr = [
  { name: 'Fibie', phoneNumber: '777-77-77' },
  { name: 'Monica', phoneNumber: '111-11-11' },
  { name: 'Chandler', phoneNumber: '222-22-22' },
  { name: 'Ross', phoneNumber: '333-33-33' },
  { name: 'Joi', phoneNumber: '444-44-44' },
  { name: 'Rachel', phoneNumber: '555-55-55' },
];

const currentDircect = false;

const sortContacts = (arr, direction = true) => {
  if (arr.constructor !== Array) {
    return null;
  }

  const result = arr.sort((a, b) => {
    if (direction === true) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return result;
};

console.log(sortContacts(contactsArr, currentDircect));
