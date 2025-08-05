import { useMemo } from 'react';

import { gregorianFarsiMonthNames, jalaaliMonthNames } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';

import { CalendarDataTypes, SingleDateTypes } from '../../../__hooks__/useCalendarGetData/types';

const useSelectedDateInfo = (selectedDate: string, calendarData: CalendarDataTypes) => {
  const { culture } = useCulture();

  const dateType = useMemo(() => {
    const result: { ch: string; monthNames: (m: number) => string } = { ch: '', monthNames: () => '' };

    switch (culture.calendarType) {
      case CalendarTypeEnum.Gregorian:
        result.ch = '-';
        result.monthNames = gregorianFarsiMonthNames;
        break;

      case CalendarTypeEnum.Jalali:
        result.ch = '/';
        result.monthNames = jalaaliMonthNames;
        break;

      default:
        result.ch = '/';
        result.monthNames = jalaaliMonthNames;
        break;
    }

    return result;
  }, [culture.calendarType]);

  let selectedDateInfo: SingleDateTypes;
  let monthNameScript: string;
  let dayScript: string;

  const dateList = selectedDate.split(dateType.ch);
  const day = Number(dateList[2]);
  const monthAndYear = dateList[0] + dateType.ch + dateList[1];

  monthNameScript = dateType.monthNames(Number(dateList[1]) - 1);
  selectedDateInfo = calendarData?.[monthAndYear][day - 1];
  dayScript = day.toString();

  return { selectedDateInfo, monthNameScript, dayScript };
};

export default useSelectedDateInfo;
