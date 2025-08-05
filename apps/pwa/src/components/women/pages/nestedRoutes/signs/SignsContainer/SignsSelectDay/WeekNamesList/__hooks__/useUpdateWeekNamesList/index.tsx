import { useEffect, useState } from 'react';

import { gregorianFarsiWeekNames, jalaaliWeekNames } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import moment from 'moment-jalaali';

import { UpdatedListTypes, UseUpdateWeekNamesListProps } from './types';

const useUpdateWeekNamesList = (infoList: UseUpdateWeekNamesListProps) => {
  const { culture } = useCulture();
  const [updatedList, setUpdatedList] = useState<null | UpdatedListTypes>(null);

  useEffect(() => {
    const list: string[] = [];
    infoList.forEach((item) => list.push(item.weekName));

    let firstDayWeekName = '';
    let lastDayWeekName = '';

    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      const firstDay = moment(infoList[0].jalaaliDate, 'jYYYY/jMM/jDD').add(1, 'day');
      const lastDay = moment(infoList[infoList.length - 1].jalaaliDate, 'jYYYY/jMM/jDD').subtract(1, 'day');

      firstDayWeekName = jalaaliWeekNames(firstDay.day());
      lastDayWeekName = jalaaliWeekNames(lastDay.day());
    }

    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      const firstDay = moment(infoList[0].gregorianDate, 'YYYY-MM-DD').add(1, 'day');
      const lastDay = moment(infoList[infoList.length - 1].gregorianDate, 'YYYY-MM-DD').subtract(1, 'day');

      firstDayWeekName = gregorianFarsiWeekNames(firstDay.day());
      lastDayWeekName = gregorianFarsiWeekNames(lastDay.day());
    }

    list.unshift(firstDayWeekName);
    list.push(lastDayWeekName);

    setUpdatedList(list);
  }, [culture.calendarType]);

  return { updatedList };
};

export default useUpdateWeekNamesList;
