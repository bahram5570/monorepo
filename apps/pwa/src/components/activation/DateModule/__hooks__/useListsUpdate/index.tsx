import { useEffect } from 'react';

import { daysListUpdater, monthListUpdater, startAndEndDates } from './__utils__';

import { UseListsUpdateProps } from './types';

const useListsUpdate = ({
  onListsUpdate,
  calendarType,
  initialLists,
  startDate,
  endDate,
  values,
}: UseListsUpdateProps) => {
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
        daysList: initialLists.days,
        calendarType,
        ...dateInfo,
        ...values,
      });

      onListsUpdate({ months: updatedMonthsList, days: updatedDaysList });
    }
  }, [values.year, values.month, calendarType]);
};

export default useListsUpdate;
