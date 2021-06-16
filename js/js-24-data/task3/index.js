//put your code here
const stDat = new Date(2021, 3, 9, 10, 10, 4, 0);
const enDat = new Date(2021, 12, 9, 8, 20, 8, 0);

export const getDiff = (startDate, endDate) => {
  const diffTime = Math.abs(startDate - endDate);
  const day = Math.abs(Math.round(diffTime / (1000 * 60 * 60 * 24)));
  const hour = Math.abs(Math.round(startDate.getHours() - endDate.getHours()));
  const minute = Math.abs(
    Math.round(startDate.getMinutes() - endDate.getMinutes())
  );
  const seconds = Math.abs(
    Math.round(startDate.getSeconds() - endDate.getSeconds())
  );

  return `${day}d ${hour}h ${minute}m ${seconds}s`;
};

getDiff(stDat, enDat);
