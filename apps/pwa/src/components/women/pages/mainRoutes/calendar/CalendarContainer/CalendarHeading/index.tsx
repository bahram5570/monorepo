import ArrowIcon from '@assets/icons/calendarArrow.svg';

import Typography from '@components/ui/Typography';

import { CALENDAR_CELL_SIZE } from '../../constants';
import { CalendarHeadingProps } from './types';

const CalendarHeading = ({ headingScript, navigateHandler }: CalendarHeadingProps) => {
  const width = (CALENDAR_CELL_SIZE + 16) * 7;

  return (
    <div className="flex justify-between pb-5 mx-auto" style={{ width }}>
      <ArrowIcon style={{ stroke: '#1C1B1E' }} className="w-10 h-6" onClick={() => navigateHandler(false)} />

      <Typography scale="Title" size="Small">
        {headingScript}
      </Typography>

      <ArrowIcon style={{ stroke: '#1C1B1E' }} className="w-10 h-6 rotate-180" onClick={() => navigateHandler(true)} />
    </div>
  );
};

export default CalendarHeading;
