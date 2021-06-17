//put your code here
// const stDat = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
// const enDat = new Date(Date.UTC(2019, 1, 22, 17, 52, 18, 0));

const stDat = new Date(2020, 0, 0, 0, 0, 0, 0);
const enDat = new Date(2021, 11, 1, 8, 8, 8, 0);

export const getDiff = (startDate, endDate) => {
  const diffTime = Math.abs(startDate - endDate);
  const day = Math.abs(Math.round(diffTime / (1000 * 60 * 60 * 24)));

  let hour = Math.abs(startDate.getHours() - endDate.getHours());

  let minute = 0;
  const minuteChecker = Math.abs(startDate.getMinutes() + endDate.getMinutes());
  if (minuteChecker >= 0 && minuteChecker < 60) {
    minute = Math.abs(startDate.getMinutes() - endDate.getMinutes());
  } else if (minuteChecker >= 60) {
    minute = Math.abs(60 + (startDate.getMinutes() - endDate.getMinutes()));
    hour -= 1;
  }

  const seconds = Math.abs(startDate.getSeconds() - endDate.getSeconds());

  return `${day}d ${hour}h ${minute}m ${seconds}s`;
};

console.log(getDiff(stDat, enDat));
