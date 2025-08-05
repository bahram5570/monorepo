import m from 'moment-jalaali';

import { DaysListUpdaterTypes, MonthListUpdaterTypes, StartAndEndDatesTypes } from './types';

export const startAndEndDates: StartAndEndDatesTypes = ({ startDate, endDate }) => {
  const startList = startDate.split('/');
  const endList = endDate.split('/');

  return {
    startMonth: startList[1],
    startYear: startList[0],
    startDay: startList[2],
    endMonth: endList[1],
    endYear: endList[0],
    endDay: endList[2],
  };
};

export const monthListUpdater: MonthListUpdaterTypes = (props) => {
  let list = [...props.monthsList];

  if (props.year === props.startYear) {
    // # Set starting month of year
    const index = list.findIndex((item) => item.value === props.startMonth);
    list = list.slice(index, list.length);
  }

  if (props.year === props.endYear) {
    // # Set ending month of year
    const index = list.findIndex((item) => item.value === props.endMonth);
    list = list.slice(0, index + 1);
  }

  return list;
};

export const daysListUpdater: DaysListUpdaterTypes = (props) => {
  let list = [...props.daysList];

  if (props.year === props.startYear && props.month === props.startMonth) {
    // # Set starting day of month
    const index = list.findIndex((item) => item.value === props.startDay);
    list = list.slice(index, list.length);
  }

  if (props.year === props.endYear && props.month === props.endMonth) {
    // # Set ending day of month
    const index = list.findIndex((item) => item.value === props.endDay);
    list = list.slice(0, index + 1);
  }

  // # Set the total days of current month
  const lastDayOfMonth = m.jDaysInMonth(Number(props.year), Number(props.month) - 1);
  list = list.filter((d) => Number(d.value) <= lastDayOfMonth);

  return list;
};
