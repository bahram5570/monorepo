import { useMemo } from 'react';

import { gregorianFarsiPassedTime, jalaaliPassedTime } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';

const useShareExperiencePassedTime = (createTime: string) => {
  const { culture } = useCulture();

  const result = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return jalaaliPassedTime(createTime);
      case CalendarTypeEnum.Gregorian:
        return gregorianFarsiPassedTime(createTime);
      default:
        return jalaaliPassedTime(createTime);
    }
  }, [createTime, culture.calendarType]);

  return result;
};

export default useShareExperiencePassedTime;
