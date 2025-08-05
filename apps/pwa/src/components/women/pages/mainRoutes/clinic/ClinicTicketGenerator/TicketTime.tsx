import { useMemo } from 'react';

import { toJalaliData } from '@utils/dates';
import { addZero } from '@utils/scripts';

import Typography from '@components/ui/Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import useTheme from '@hooks/useTheme';

import { TicketTimeProps } from './types';

const TicketTime = ({ createTime, stylingTypes }: TicketTimeProps) => {
  const { colors } = useTheme();
  const { culture } = useCulture();

  const color = stylingTypes === 'heading' ? colors.Pink_50 : colors.Surface_Outline;

  const date = new Date(createTime);
  const timeScript = `${date.getHours()}:${date.getMinutes()}`;

  const dateScript = useMemo(() => {
    const fullDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return toJalaliData(fullDate);
      case CalendarTypeEnum.Gregorian:
        return fullDate.replaceAll('-', '/');
      default:
        return toJalaliData(fullDate);
    }
  }, [culture.calendarType, date]);

  return (
    <div className="flex items-center gap-1">
      <Typography scale="Body" size="Small" color="FREE-STYLE" freeColor={color}>
        {dateScript}
      </Typography>

      <div className="w-[1px] h-[18px]" style={{ backgroundColor: color }} />

      <Typography scale="Body" size="Small" color="FREE-STYLE" freeColor={color}>
        {timeScript}
      </Typography>
    </div>
  );
};

export default TicketTime;
