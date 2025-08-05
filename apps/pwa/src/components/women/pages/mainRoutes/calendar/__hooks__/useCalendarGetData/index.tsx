import { calendarDayInfoMaker, calendarIntervalMaker, calendarMonthInfoMaker } from './__utils__';

import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';

import { CalendarDataTypes, InfoCalendarResponseTypes, SingleDateTypes, UseGetDataProps } from './types';

const useCalendarGetData = ({ onValues, hasSigns }: UseGetDataProps) => {
  const { culture } = useCulture();

  const successHandler = (v: InfoCalendarResponseTypes) => {
    let result: CalendarDataTypes = {};
    const calendarInterval = calendarIntervalMaker(v.start, v.end, culture.calendarType);

    for (let i = 0; i <= calendarInterval; i++) {
      const monthInfo = calendarMonthInfoMaker(v.start, i, culture.calendarType);
      const list: SingleDateTypes[] = [];

      for (let j = 0; j < monthInfo.totalDaysOfMonth; j++) {
        const dayInfo = calendarDayInfoMaker(monthInfo.beggingOfMonth, j, culture.calendarType);

        const singleDate: SingleDateTypes = {
          items: hasSigns ? v.days[dayInfo.gregorianDate]?.items || [] : [],
          gregorianDate: dayInfo.gregorianDate,
          jalaaliDate: dayInfo.jalaaliDate,
          isToday: dayInfo.isToday,
        };

        list.push(singleDate);
      }

      result = { ...result, [monthInfo.yearAndMonth]: list };
    }

    onValues({
      calendarGuideInfo: { haveBreastfeeding: v.haveBreastfeeding, havePregnency: v.havePregnency },
      calendarData: result,
    });
  };

  const { isLoading } = useApi<InfoCalendarResponseTypes>({
    method: 'GET',
    api: 'info/calendar',
    onSuccess: successHandler,
    queryKey: ['infoCalendar'],
  });

  return { isLoading };
};

export default useCalendarGetData;
