import { useMemo } from 'react';

import { percentFinder } from '../__utils__';
import { toJalaliData } from '@utils/dates';

import Typography from '@components/ui/Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import useTheme from '@hooks/useTheme';

import { WidgetPeriodReportCardCandleGeneratorProps } from './types';

const WidgetPeriodReportCardCandleGenerator = ({
  periodLength,
  cycleLength,
  start,
  min,
  max,
}: WidgetPeriodReportCardCandleGeneratorProps) => {
  const { colors } = useTheme();
  const { culture } = useCulture();

  const dateScript = useMemo(() => {
    let separatedDate: string[] = [];

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        separatedDate = toJalaliData(start).split('/');
        break;
      case CalendarTypeEnum.Gregorian:
        separatedDate = start.slice(0, 10).split('-');
        break;
      default:
        separatedDate = toJalaliData(start).split('/');
        break;
    }

    return `${Number(separatedDate[1])}/${Number(separatedDate[2])}`;
  }, [culture.calendarType, start]);

  return (
    <div className="relative w-4 h-full flex items-end justify-center pointer-events-none z-0">
      <div
        className="absolute left-0 right-0 bottom-0 rounded-3xl flex justify-center"
        style={{ backgroundColor: colors.Neutral_Surface, height: percentFinder({ min, max, value: cycleLength }) }}
      >
        <Typography
          scale="Lable"
          size="SmallProminet"
          color="Surface_InverseSurface"
          className="-translate-y-4 scale-90"
        >
          {cycleLength.toString()}
        </Typography>
      </div>

      <div
        className="absolute left-0 right-0 bottom-0 p-[2px]"
        style={{
          height: percentFinder({ min, max, value: periodLength }),
        }}
      >
        <div
          className="h-full w-full flex items-end justify-center rounded-3xl"
          style={{ backgroundColor: colors.PrimaryWoman_Primary }}
        >
          {periodLength >= 5 && (
            <Typography scale="Lable" size="Small" color="PrimaryWoman_OnPrimary" className="scale-90">
              {periodLength.toString()}
            </Typography>
          )}
        </div>
      </div>

      <Typography scale="Body" size="Small" color="Surface_Outline" className="translate-y-7">
        {dateScript}
      </Typography>
    </div>
  );
};

export default WidgetPeriodReportCardCandleGenerator;
