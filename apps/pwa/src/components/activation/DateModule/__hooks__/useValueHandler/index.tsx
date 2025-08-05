import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@utils/system';

import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';

import { UseValueHandlerProps } from './types';

const useValueHandler = ({ values, valueHandler }: UseValueHandlerProps) => {
  const { culture } = useCulture();
  const isFirstTime = useRef(isDevelopeMode());

  const stringMaker = () => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return `${values.year}/${values.month}/${values.day}`;

      case CalendarTypeEnum.Gregorian:
        return `${values.year}-${values.month}-${values.day}`;

      default:
        return `${values.year}/${values.month}/${values.day}`;
    }
  };

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    valueHandler(stringMaker());
  }, [values.year, values.month, values.day, culture.calendarType]);
};

export default useValueHandler;
