import moment from 'moment';

const getDayFromDate = (day) => {
  moment.locale();

  return moment.unix(day).format('ddd');
};

const getHourFromDate = (day) => {
  return moment.unix(day).format('kk:mm');
};

export {getDayFromDate, getHourFromDate};
