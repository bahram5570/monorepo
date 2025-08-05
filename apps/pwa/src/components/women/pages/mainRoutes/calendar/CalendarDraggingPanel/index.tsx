import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import CalendarHandle from './CalendarHandle';
import SelectedDayBiorhythm from './SelectedDayBiorhythm';
import SelectedDayNote from './SelectedDayNote';
import SelectedDaySigns from './SelectedDaySigns';
import SelectedDayStatus from './SelectedDayStatus';
import useCalendarDrag from './__hooks__/useCalendarDrag';
import useSelectedDateInfo from './__hooks__/useSelectedDateInfo';
import { CALENDAR_DRAGGING_PANEL_ID } from './constants';
import { CalendarDraggingPanelProps } from './types';

const CalendarDraggingPanel = ({ selectedDate, calendarData }: CalendarDraggingPanelProps) => {
  const { colors } = useTheme();
  const { ref, isDragging, positionY } = useCalendarDrag();
  const { dayScript, monthNameScript, selectedDateInfo } = useSelectedDateInfo(selectedDate, calendarData);

  return (
    <div className="relative w-full h-[100dvh]" id={CALENDAR_DRAGGING_PANEL_ID}>
      <div
        ref={ref}
        className="absolute left-0 right-0 bottom-0 mx-auto z-30"
        style={{ maxWidth: MAX_SCREEN_WIDTH, top: positionY, backgroundColor: colors.Surface_SurfaceVariant }}
      >
        <div
          className="flex flex-col items-center gap-6 px-4 py-2 "
          style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
        >
          <CalendarHandle />

          <SelectedDayStatus day={dayScript} monthName={monthNameScript} selectedDateInfo={selectedDateInfo} />

          <SelectedDaySigns selectedDateInfo={selectedDateInfo} />
          <SelectedDayNote selectedDateInfo={selectedDateInfo} />
          <SelectedDayBiorhythm selectedDateInfo={selectedDateInfo} />
        </div>
      </div>
    </div>
  );
};

export default CalendarDraggingPanel;
