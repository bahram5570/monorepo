import { useEffect, useState } from 'react';

import { currentDate } from '@utils/dates';

import { SelectedDateHandlerTypes } from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendar/types';
import useCalendarGetData from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData';
import {
  CalendarDataTypes,
  OnValuesTypes,
} from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/types';

const { jDate } = currentDate();

const useCalendar = ({ dateTime }: { dateTime: string }) => {
  const [calendarData, setCalendarData] = useState<CalendarDataTypes | null>();

  const valuesHandler = (v: OnValuesTypes) => {
    setCalendarData(v.calendarData);
  };

  const { isLoading } = useCalendarGetData({ onValues: valuesHandler, hasSigns: false });
  const [selectedDate, setSelectedDate] = useState(jDate);

  useEffect(() => {
    if (dateTime) {
      setSelectedDate(dateTime);
    }
  }, [dateTime]);

  const selectedDateHandler: SelectedDateHandlerTypes = (v) => {
    setSelectedDate(v);
  };

  return { isLoading, calendarData, selectedDate, selectedDateHandler };
};

export default useCalendar;
