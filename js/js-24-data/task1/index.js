//put your code here

const daysArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);

  return daysArr[new Date(dayInFuture).getDay()];
};

console.log(dayOfWeek(new Date(), 10));
