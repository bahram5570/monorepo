import Typography from '@components/ui/Typography';

import useCalendarDayInfo from '../../CalendarContainer/__hooks__/useCalendarDayInfo';
import { SelectedDayStatusPorps } from './types';

const SelectedDayStatus = ({ selectedDateInfo, monthName, day }: SelectedDayStatusPorps) => {
  const { dayTitle, dayTypeColor } = useCalendarDayInfo(selectedDateInfo);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-1">
      <Typography scale="Title" size="Medium">
        {`${day} ${monthName}`}
      </Typography>

      <Typography scale="Body" size="Large" color="FREE-STYLE" freeColor={dayTypeColor}>
        {dayTitle}
      </Typography>
    </div>
  );
};

export default SelectedDayStatus;
