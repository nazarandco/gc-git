const createMessenger = () => {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(someBody) {
    sender = someBody;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};

const messanger = createMessenger();

messanger.sendMessage('Bob');

const messangerFull = createMessenger();

messangerFull.sendMessage('Bob');
messangerFull.setMessage('Good job');
messangerFull.setSender('Gromcode');
messangerFull.sendMessage('Bob');

export default createMessenger;
