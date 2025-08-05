import { GREGORIAN_FARSI_MONTH_LIST, JALALI_MONTH_LIST, WEEK_LIST } from '@constants/date.constants';
import m from 'moment-jalaali';

import { addZero } from './scripts';

export const currentDate = () => {
  const moment = m();
  const date = new Date();

  const jDate = moment.format('jYYYY/jMM/jDD');
  const jList = jDate.split('/');
  const jYear = Number(jList[0]);
  const jMonth = Number(jList[1]);
  const jDay = Number(jList[2]);

  const gDate = moment.format('YYYY-MM-DD');
  const gList = gDate.split('-');
  const gYear = Number(gList[0]);
  const gMonth = Number(gList[1]);
  const gDay = Number(gList[2]);

  const time = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;

  return { jDate, jYear, jMonth, jDay, gDate, gYear, gMonth, gDay, time };
};

export const toJalaliData = (d: string) => {
  return m(d, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
};

export const toGregorianData = (d: string) => {
  return m(d, 'jYYYY/jMM/jDD').format('YYYY-MM-DD');
};

export const jalaaliMonthNames = (m: number) => {
  return JALALI_MONTH_LIST[m];
};

export const gregorianFarsiMonthNames = (m: number) => {
  return GREGORIAN_FARSI_MONTH_LIST[m];
};

export const jalaaliWeekNames = (d: number) => {
  return WEEK_LIST[d];
};

export const gregorianFarsiWeekNames = (d: number) => {
  return WEEK_LIST[d];
};

export const jalaaliScriptDate = (d: string) => {
  const info = d.split('/');
  const script = `${Number(info[2])} ${jalaaliMonthNames(Number(info[1]) - 1)} ${info[0]}`;
  return script;
};

export const gregorianFarsiScriptDate = (d: string) => {
  const info = d.split('-');
  const script = `${Number(info[2])} ${gregorianFarsiMonthNames(Number(info[1]) - 1)} ${info[0]}`;
  return script;
};

export const jalaaliPassedTime = (fullGregorianDate: string) => {
  let result = '';
  const currentTime = m().format('jYYYY/jMM/jDD HH:mm:ss');
  const currentJalaaliTime = m(currentTime, 'jYYYY/jMM/jDD HH:mm:ss');

  const incomingTime = m(fullGregorianDate, 'YYYY-MM-DD HH:mm:ss').format('jYYYY/jMM/jDD HH:mm:ss');
  const incomingJallaliMoment = m(incomingTime, 'jYYYY/jMM/jDD HH:mm:ss');
  const diffMinutes = currentJalaaliTime.diff(incomingJallaliMoment, 'minutes');

  if (diffMinutes < 1) {
    result = 'لحظاتی پیش';
  } else {
    if (diffMinutes < 60) {
      result = `${diffMinutes} دقیقه پیش`;
    } else {
      const diffHoures = currentJalaaliTime.diff(incomingJallaliMoment, 'hours');

      if (diffHoures < 24) {
        result = `${diffHoures} ساعت پیش`;
      } else {
        result = jalaaliScriptDate(toJalaliData(fullGregorianDate));
      }
    }
  }

  return result;
};

export const gregorianFarsiPassedTime = (fullGregorianDate: string) => {
  let result = '';
  const currentTime = m().format('YYYY-MM-DD HH:mm:ss');
  const currentGregorianTime = m(currentTime, 'YYYY-MM-DD HH:mm:ss');

  const incomingGregorianMoment = m(fullGregorianDate, 'YYYY-MM-DD HH:mm:ss');
  const diffMinutes = currentGregorianTime.diff(incomingGregorianMoment, 'minutes');

  if (diffMinutes < 1) {
    result = 'لحظاتی پیش';
  } else {
    if (diffMinutes < 60) {
      result = `${diffMinutes} دقیقه پیش`;
    } else {
      const diffHoures = currentGregorianTime.diff(incomingGregorianMoment, 'hours');

      if (diffHoures < 24) {
        result = `${diffHoures} ساعت پیش`;
      } else {
        result = gregorianFarsiScriptDate(fullGregorianDate.split(' ')[0]);
      }
    }
  }

  return result;
};
