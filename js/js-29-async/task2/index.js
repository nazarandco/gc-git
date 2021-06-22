//put your code here

const pinger = (number, ms) => {
  let i = number;
  console.log('Ping');

  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, ms);

  //   setTimeout(() => {
  //     clearInterval(interval);
  //   }, number * ms); // цей спосіб має неточність в розрахунку ms
};

pinger(5, 1000);
