import { useEffect, useState } from 'react';

import { currentDate } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import m from 'moment-jalaali';

import { DatesIntervalTypes, UseEditCycleDateIntervalsProps } from './types';

const useEditCycleDateIntervals = ({ startTime, periodLength }: UseEditCycleDateIntervalsProps) => {
  const { culture } = useCulture();
  const [datesInterval, setDatesInterval] = useState<DatesIntervalTypes>(null);

  useEffect(() => {
    const { jDate, gDate } = currentDate();
    const result: DatesIntervalTypes = { defaultDate: '', endDate: '', startDate: '' };

    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      result.startDate = m(startTime, 'YYYY-MM-DD').add(1, 'day').format('YYYY-MM-DD');
      result.endDate = m(gDate, 'YYYY-MM-DD').add(180, 'day').format('YYYY-MM-DD');
      result.defaultDate = m(startTime, 'YYYY-MM-DD')
        .add(periodLength - 1, 'day')
        .format('YYYY-MM-DD');
    }

    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      result.startDate = m(startTime, 'jYYYY/jMM/jDD').add(1, 'day').format('jYYYY/jMM/jDD');
      result.endDate = m(jDate, 'jYYYY/jMM/jDD').add(180, 'day').format('jYYYY/jMM/jDD');
      result.defaultDate = m(startTime, 'jYYYY/jMM/jDD')
        .add(periodLength - 1, 'day')
        .format('jYYYY/jMM/jDD');
    }

    setDatesInterval(result);
  }, [culture.calendarType]);

  return datesInterval;
};

export default useEditCycleDateIntervals;
