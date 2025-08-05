import { useMemo } from 'react';

import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';

import { MonthGeneratorDateTypesTypes } from '../../types';

const useMonthGeneratorDateTypeInfo = () => {
  const { culture } = useCulture();

  return useMemo(() => {
    let result: MonthGeneratorDateTypesTypes = 'jalaaliDate';

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        result = 'jalaaliDate';
        break;
      case CalendarTypeEnum.Gregorian:
        result = 'gregorianDate';
        break;
      default:
        result = 'jalaaliDate';
        break;
    }

    return result;
  }, [culture.calendarType]);
};

export default useMonthGeneratorDateTypeInfo;
