import { useMemo } from 'react';

import { toJalaliData } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';

import { UseDatesScriptType } from './types';

const useDatesScript = ({ from, to }: UseDatesScriptType) => {
  const { culture } = useCulture();

  return useMemo(() => {
    const scripts = { fromScript: '', toScript: '' };

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        scripts.fromScript = toJalaliData(from);
        scripts.toScript = toJalaliData(to);
        break;

      case CalendarTypeEnum.Gregorian:
        scripts.fromScript = from.slice(0, 10).replaceAll('-', '/');
        scripts.toScript = to.slice(0, 10).replaceAll('-', '/');
        break;

      default:
        scripts.fromScript = toJalaliData(from);
        scripts.toScript = toJalaliData(to);
        break;
    }

    return scripts;
  }, [culture.calendarType, from, to]);
};

export default useDatesScript;
