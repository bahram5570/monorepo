import { useMemo } from 'react';

import { gregorianFarsiScriptDate, jalaaliScriptDate } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import moment from 'moment-jalaali';

const useDateScript = (date: string) => {
  const { culture } = useCulture();

  return useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return jalaaliScriptDate(moment(date, 'YYYY-MM-DD').format('jYYYY/jMM/jDD'));

      case CalendarTypeEnum.Gregorian:
        return gregorianFarsiScriptDate(moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD'));

      default:
        return jalaaliScriptDate(moment(date, 'YYYY-MM-DD').format('jYYYY/jMM/jDD'));
    }
  }, [culture.calendarType, date]);
};

export default useDateScript;
