//put your code here

const shmoment = (oldDate) => {
  let newDate = new Date(oldDate);

  const methods = {
    add(format, value) {
      if (format === 'years') {
        newDate = new Date(newDate.setFullYear(newDate.getFullYear() + value));
        return this;
      }
      if (format === 'months') {
        newDate = new Date(newDate.setMonth(newDate.getMonth() + value));
        return this;
      }
      if (format === 'days') {
        newDate = new Date(newDate.setDate(newDate.getDate() + value));
        return this;
      }
      if (format === 'hours') {
        newDate = new Date(newDate.setHours(newDate.getHours() + value));
        return this;
      }
      if (format === 'minutes') {
        newDate = new Date(newDate.setMinutes(newDate.getMinutes() + value));
        return this;
      }
      if (format === 'seconds') {
        newDate = new Date(newDate.setSeconds(newDate.getSeconds() + value));
        return this;
      }
      if (format === 'milliseconds') {
        newDate = new Date(
          newDate.setMilliseconds(newDate.getMilliseconds() + value)
        );
        return this;
      }
    },
    subtract(format, value) {
      if (format === 'years') {
        newDate = new Date(newDate.setFullYear(newDate.getFullYear() - value));
        return this;
      }
      if (format === 'months') {
        newDate = new Date(newDate.setMonth(newDate.getMonth() - value));
        return this;
      }
      if (format === 'days') {
        newDate = new Date(newDate.setDate(newDate.getDate() - value));
        return this;
      }
      if (format === 'hours') {
        newDate = new Date(newDate.setHours(newDate.getHours() - value));
        return this;
      }
      if (format === 'minutes') {
        newDate = new Date(newDate.setMinutes(newDate.getMinutes() - value));
        return this;
      }
      if (format === 'seconds') {
        newDate = new Date(newDate.setSeconds(newDate.getSeconds() - value));
        return this;
      }
      if (format === 'milliseconds') {
        newDate = new Date(
          newDate.setMilliseconds(newDate.getMilliseconds() - value)
        );
        return this;
      }
    },
    result() {
      return newDate;
    },
  };

  return methods;
};

console.log(
  shmoment(new Date(2020, 0, 7, 17, 17, 17))
    .add('minutes', 2)
    .add('days', 8)
    .subtract('years', 1)
    .result()
); // ... Jan 15 2019 17:19:17 ...

// const initialDate = new Date(Date.UTC(2020, 0, 1));
// console.log(shmoment(initialDate).add('years', 2).result());

// const initialDate = new Date(Date.UTC(2020, 7, 10, 10, 10, 10, 10));
// console.log(shmoment(initialDate).subtract('months', 2).result());
