import moment from 'moment';

const getDayFromDate = (day) => {
  moment.locale();

  return moment.unix(day).format('ddd');
};

const getHourFromDate = (day) => {
  return moment.unix(day).format('kk:mm');
};

const getNumberHourToReturn = (hours) => {
  let actualHour = moment.unix(hours).format('kk');

  return 24 - actualHour;
};

export {getDayFromDate, getHourFromDate, getNumberHourToReturn};
