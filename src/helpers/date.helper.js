import moment from 'moment';

const getDayFromDate = (day) => {
  moment.locale('fr', {
    weekdaysShort: 'lun._mar._mer._jeu._ven._sam._dim.'.split('_'),
  });

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
