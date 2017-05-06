import moment from 'moment';

const inputIs = {
  date: (value) => {
    if (moment(value, 'YYYY-MM-DD', true).isValid() ||
      moment(value, 'MM-DD-YYYY', true).isValid() ||
      moment(value, 'DD-MM-YYYY', true).isValid() ||
      moment(value, 'YYYY/MM/DD', true).isValid() ||
      moment(value, 'DD/MM/YYYY', true).isValid() ||
      moment(value, 'MM/DD/YYYY', true).isValid()) {
      return true;
    }

    return false;
  },

  datetime: (value) => {
    if (moment(value, 'YYYY-MM-DD hh:mm:ss', true).isValid() ||
      moment(value, 'YYYY-MM-DD hh:mm', true).isValid() ||
      moment(value, 'MM-DD-YYYY hh:mm:ss', true).isValid() ||
      moment(value, 'MM-DD-YYYY hh:mm', true).isValid() ||
      moment(value, 'DD-MM-YYYY hh:mm:ss', true).isValid() ||
      moment(value, 'DD-MM-YYYY hh:mm', true).isValid() ||
      moment(value, 'YYYY/MM/DD hh:mm:ss', true).isValid() ||
      moment(value, 'YYYY/MM/DD hh:mm', true).isValid() ||
      moment(value, 'DD/MM/YYYY hh:mm:ss', true).isValid() ||
      moment(value, 'DD/MM/YYYY hh:mm', true).isValid() ||
      moment(value, 'MM/DD/YYYY hh:mm:ss', true).isValid() ||
      moment(value, 'MM/DD/YYYY hh:mm', true).isValid()) {
      return true;
    }

    return false;
  },

  email: (value) => {
    const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

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

  time: (value) => {
    if (moment(value, 'hh:mm:ss', true).isValid() ||
      moment(value, 'hh:mm', true).isValid()) {
      return true;
    }

    return false;
  },

  url: (value) => {
    const regEx = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;

    return regEx.test(value);
  },

  valid: (value, regEx) => regEx.test(value),
};

export default inputIs;
