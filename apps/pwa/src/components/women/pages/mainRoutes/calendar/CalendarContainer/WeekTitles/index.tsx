import { useMemo } from 'react';

import Typography from '@components/ui/Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';

import { CALENDAR_CELL_SIZE, CALENDAR_GREGORIAN_FARSI_WEEK_NAMES, CALENDAR_JALALI_WEEK_NAMES } from '../../constants';

const WeekTitles = () => {
  const { culture } = useCulture();

  const weeksList = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Gregorian:
        return CALENDAR_GREGORIAN_FARSI_WEEK_NAMES;
      case CalendarTypeEnum.Jalali:
        return CALENDAR_JALALI_WEEK_NAMES;
      default:
        return CALENDAR_JALALI_WEEK_NAMES;
    }
  }, [culture.calendarType]);

  return (
    <div className="w-fit grid grid-cols-7 justify-center gap-4 pb-2 mx-auto">
      {weeksList.map((item) => (
        <div className="flex justify-center" style={{ width: CALENDAR_CELL_SIZE }} key={item}>
          <Typography scale="Body" size="Small" color="Surface_Outline" className="">
            {item}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default WeekTitles;
