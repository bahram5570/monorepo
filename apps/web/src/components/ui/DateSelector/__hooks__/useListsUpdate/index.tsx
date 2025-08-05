import { useEffect } from 'react';

import { daysListUpdater, monthListUpdater, startAndEndDates } from './__utils__';
import { UseListsUpdateProps } from './types';

const useListsUpdate = ({ values, startDate, endDate, onListsUpdate, initialLists }: UseListsUpdateProps) => {
  useEffect(() => {
    if (initialLists) {
      const dateInfo = startAndEndDates({ startDate, endDate });

      // # Months list
      const updatedMonthsList = monthListUpdater({
        monthsList: initialLists.months,
        startMonth: dateInfo.startMonth,
        startYear: dateInfo.startYear,
        endMonth: dateInfo.endMonth,
        endYear: dateInfo.endYear,
        year: values.year,
      });

      // # Days list
      const updatedDaysList = daysListUpdater({
        startMonth: dateInfo.startMonth,
        startYear: dateInfo.startYear,
        daysList: initialLists.days,
        endMonth: dateInfo.endMonth,
        startDay: dateInfo.startDay,
        endYear: dateInfo.endYear,
        endDay: dateInfo.endDay,
        month: values.month,
        year: values.year,
      });

      onListsUpdate({ months: updatedMonthsList, days: updatedDaysList });
    }
  }, [values.year, values.month]);
};

export default useListsUpdate;
