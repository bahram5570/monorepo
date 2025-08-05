import { useMemo } from 'react';

import { currentDate } from '@utils/dates';

import { CalendarTypeEnum, PERIOD_INTERVAL, PREGNANCY_INTERVAL } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import m from 'moment-jalaali';

const { jDate, gDate } = currentDate();

const useDateIntervals = () => {
  const { culture } = useCulture();

  return useMemo(() => {
    const dateIntervals = {
      periodEnd: '',
      periodStart: '',
      giveBirthEnd: '',
      giveBirthStart: '',
      pregnancyPeriodEnd: '',
      pregnancyPeriodStart: '',
    };

    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      dateIntervals.periodEnd = gDate;
      dateIntervals.giveBirthStart = gDate;
      dateIntervals.pregnancyPeriodEnd = gDate;
      dateIntervals.giveBirthEnd = m(gDate).add(PREGNANCY_INTERVAL, 'day').format('YYYY-MM-DD');
      dateIntervals.periodStart = m(gDate).subtract(PERIOD_INTERVAL, 'day').format('YYYY-MM-DD');
      dateIntervals.pregnancyPeriodStart = m(gDate).subtract(PREGNANCY_INTERVAL, 'day').format('YYYY-MM-DD');
    }

    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      dateIntervals.periodEnd = jDate;
      dateIntervals.giveBirthStart = jDate;
      dateIntervals.pregnancyPeriodEnd = jDate;
      dateIntervals.giveBirthEnd = m(gDate).add(PREGNANCY_INTERVAL, 'day').format('jYYYY/jMM/jDD');
      dateIntervals.periodStart = m(gDate).subtract(PERIOD_INTERVAL, 'day').format('jYYYY/jMM/jDD');
      dateIntervals.pregnancyPeriodStart = m(gDate).subtract(PREGNANCY_INTERVAL, 'day').format('jYYYY/jMM/jDD');
    }

    return dateIntervals;
  }, [culture.calendarType]);
};

export default useDateIntervals;
