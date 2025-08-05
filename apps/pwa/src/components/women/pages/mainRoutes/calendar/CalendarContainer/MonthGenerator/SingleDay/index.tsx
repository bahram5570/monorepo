import { memo } from 'react';

import GiveBirthIcon from '@assets/icons/calendarGiveBirth.svg';

import Typography from '@components/ui/Typography';
import { DATE_SEPERATOR_REGEX } from '@constants/date.constants';
import useTheme from '@hooks/useTheme';

import { CALENDAR_CELL_SIZE } from '../../../constants';
import useCalendarDayInfo from '../../__hooks__/useCalendarDayInfo';
import HasSignDot from './HasSignDot';
import { SingleDayProps } from './types';

const SingleDay = ({ isSelected, selectedDateHandler, day, dateType }: SingleDayProps) => {
  const { colors } = useTheme();
  const { backgroundColor, cellColor, isGiveBirth } = useCalendarDayInfo(day);

  return (
    <div
      className="relative rounded-lg flex flex-col justify-center items-center outline-dashed outline-1 outline-offset-1 "
      onClick={() => selectedDateHandler(day[dateType])}
      style={{
        outlineColor: isSelected ? colors.Neutral_OnSurface : colors.Transparent,
        backgroundColor: backgroundColor,
        height: CALENDAR_CELL_SIZE,
        width: CALENDAR_CELL_SIZE,
      }}
    >
      <HasSignDot day={day} />

      {isGiveBirth && <GiveBirthIcon className="w-6 h-auto" style={{ fill: cellColor }} />}

      {!isGiveBirth && (
        <>
          <Typography
            scale="Body"
            size="Medium"
            color="FREE-STYLE"
            freeColor={cellColor}
            className={`${day.isToday && 'translate-y-1.5'}`}
          >
            {Number(day[dateType].split(DATE_SEPERATOR_REGEX)[2]).toString()}
          </Typography>

          {day.isToday && (
            <Typography scale="Body" size="Small" color="FREE-STYLE" className="-translate-y-1.5" freeColor={cellColor}>
              امروز
            </Typography>
          )}
        </>
      )}
    </div>
  );
};

export default memo(SingleDay, (prevProps, nextProps) => {
  return prevProps.isSelected === nextProps.isSelected;
});
