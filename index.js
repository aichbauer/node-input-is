const isValidDate = (value, format) => {
  let date;
  let day;
  let month;
  let year;
  let valid;

  if (format === 'YYYY-DD-MM') {
    date = value.split('-');

    year = date[0];
    day = date[1];
    month = date[2];
  } else if (format === 'YYYY-MM-DD') {
    date = value.split('-');

    year = date[0];
    month = date[1];
    day = date[2];
  } else if (format === 'MM-DD-YYYY') {
    date = value.split('-');

    month = date[0];
    day = date[1];
    year = date[2];
  } else if (format === 'DD-MM-YYYY') {
    date = value.split('-');

    day = date[0];
    month = date[1];
    year = date[2];
  } else if (format === 'YYYY/MM/DD') {
    date = value.split('/');

    year = date[0];
    month = date[1];
    day = date[2];
  } else if (format === 'YYYY/DD/MM') {
    date = value.split('/');

    year = date[0];
    day = date[1];
    month = date[2];
  } else if (format === 'MM/DD/YYYY') {
    date = value.split('/');

    month = date[0];
    day = date[1];
    year = date[2];
  } else if (format === 'DD/MM/YYYY') {
    date = value.split('/');

    day = date[0];
    month = date[1];
    year = date[2];
  }

  day = Number(day);
  month = Number(month);
  year = Number(year);

  const dateToCheck = new Date();
  dateToCheck.setFullYear(year, month - 1, day);

  if (
    dateToCheck.getFullYear() === year
    && dateToCheck.getMonth() + 1 === month
    && dateToCheck.getDate() === day
  ) {
    valid = true;
  } else {
    valid = false;
  }

  return valid;
};

const isValidTime = (value) => {
  const regEx = /^([0-1][0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/;

  return regEx.test(value);
};

const inputIs = {
  date: (value, format) => isValidDate(value, format),

  datetime: (value, format) => {
    const date = value.includes('T')
      ? value.split('T')[0]
      : value.split(' ')[0];
    const time = value.includes('T')
      ? value.split('T')[1]
      : value.split(' ')[1];

    const validDate = isValidDate(date, format);
    const validTime = isValidTime(time);

    return (validDate && validTime);
  },

  email: (value) => {
    const regEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    return regEx.test(value);
  },

  exactly: (value, target) => value === target,

  filled: (value) => value.length > 0,

  float: (value) => {
    const regEx = /^\d+\.\d+$/;

    return regEx.test(value);
  },

  integer: (value) => {
    const regEx = /^\d+$/;

    return regEx.test(value);
  },

  max: (value, target) => value.length <= target,

  min: (value, target) => value.length >= target,

  not: (value, target) => value !== target,

  number: (value) => !isNaN(value),

  partOf: (value, characters) => characters.includes(value),

  phonenumber: (value) => {
    const regEx = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,10}$/;

    return regEx.test(value);
  },

  time: (value) => isValidTime(value),

  url: (value) => {
    const regEx = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/;

    return regEx.test(value);
  },

  valid: (value, regEx) => regEx.test(value),
};

export default inputIs;
