import { useEffect } from 'react';

import { addZero } from '@utils/scripts';

import { CalendarTypeEnum, DATE_SEPERATOR_REGEX } from '@constants/date.constants';

import { ListTypes } from '../useListsMaker/types';
import { DATE_MODULE_GREGORIAN_MONTH_LIST, DATE_MODULE_JALALI_MONTH_LIST } from './constants';
import { UseInitialListsProps } from './types';

const useInitialLists = ({ startDate, endDate, calendarType, onInitialLists }: UseInitialListsProps) => {
  const listHandler = () => {
    const startYear = Number(startDate.split(DATE_SEPERATOR_REGEX)[0]);
    const endYear = Number(endDate.split(DATE_SEPERATOR_REGEX)[0]);

    const years: ListTypes = [];
    for (let i = startYear; i <= endYear; i++) {
      years.push({ title: i.toString(), value: i.toString() });
    }

    let months = DATE_MODULE_JALALI_MONTH_LIST;
    switch (calendarType) {
      case CalendarTypeEnum.Gregorian:
        months = DATE_MODULE_GREGORIAN_MONTH_LIST;
        break;
    }

    const days: ListTypes = [];
    for (let i = 1; i <= 31; i++) {
      days.push({ title: i.toString(), value: addZero(i.toString()) });
    }

    return { years, months, days };
  };

  useEffect(() => {
    const result = listHandler();
    onInitialLists(result);
  }, [calendarType]);
};

export default useInitialLists;
