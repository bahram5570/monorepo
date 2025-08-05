import { useEffect, useState } from 'react';

import { currentDate } from '@utils/dates';

import Typography from '@components/ui/Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import useTheme from '@hooks/useTheme';
import moment from 'moment-jalaali';

const WidgetCycleDateCardLatePeriod = () => {
  const { jDate, gDate } = currentDate();
  const { colors } = useTheme();
  const { culture } = useCulture();
  const [currentDay, setCurrentDay] = useState<string>('');

  useEffect(() => {
    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      const gregorianMoment = moment(gDate, 'YYYY/MM/DD');
      const gregorianDay = parseInt(gregorianMoment.format('DD'));

      setCurrentDay(gregorianDay.toString());
    }

    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      const jalaliMoment = moment(jDate, 'jYYYY/jMM/jDD');
      const jalaliDay = parseInt(jalaliMoment.format('jDD'));

      setCurrentDay(jalaliDay.toString());
    }
  }, [culture.calendarType]);

  return (
    <div
      className="absolute top-0 bottom-0 w-6 flex items-center justify-center h-full px-2 rounded-full"
      style={{
        right: `96%`,
        backgroundColor: colors.Grey_500,
      }}
    >
      <Typography scale="Lable" size="Medium" color="Neutral_Background">
        {currentDay}
      </Typography>
    </div>
  );
};

export default WidgetCycleDateCardLatePeriod;
