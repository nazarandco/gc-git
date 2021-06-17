//put your code here
const stDat = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
const enDat = new Date(Date.UTC(2019, 1, 22, 17, 52, 18, 0));

const secondTime = 1000;
const minuteTime = 1000 * 60;
const hourTime = minuteTime * 60;
const dayTime = hourTime * 24;

export const getDiff = (startDate, endDate) => {
  const diffTime = Math.abs(startDate - endDate); 
  // цифра на виході - це часова різниця в мілісекундах

  const days = Math.floor(diffTime / dayTime); // отримуємо к-сть днів
  const hours = Math.floor((diffTime % dayTime) / hourTime); // остачу ділимо на 1 год - і отримуємо остачу від днів в годинах, заокруглених до меншого
  const minutes = Math.floor((diffTime % hourTime) / minuteTime); // остачу від ділення цілої дати мілісекунд на години, ми ділимо на 1 хв - і отримуємо остачу від годин в хвилинах
  const seconds = Math.floor((diffTime % minuteTime) / secondTime);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(getDiff(stDat, enDat));
