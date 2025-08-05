import { currentDate } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import { CultureTypes } from '@providers/CultureProvider/types';

export const dateModuleTodaySelector = (calendarType: Pick<CultureTypes, 'calendarType'>['calendarType']) => {
  const { gDate, jDate } = currentDate();

  switch (calendarType) {
    case CalendarTypeEnum.Gregorian:
      return gDate;

    case CalendarTypeEnum.Jalali:
      return jDate;

    default:
      return jDate;
  }
};
