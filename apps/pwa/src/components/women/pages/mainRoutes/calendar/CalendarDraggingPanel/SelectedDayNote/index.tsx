import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import { CalendarInitialSelectedDateType } from '../../__hooks__/useCalendar/types';
import { CalendarWidgetEnums } from '../../__hooks__/useCalendarGetData/CalendarEnums';
import SelectedDayNoNote from './SelectedDayNoNote';
import SelectedDayNoteList from './SelectedDayNoteList';
import { SelectedDayNotePropsType } from './type';

const SelectedDayNote = ({ selectedDateInfo }: SelectedDayNotePropsType) => {
  const selectedDayNoteInfo = selectedDateInfo.items.find((item) => item.type === CalendarWidgetEnums.Note);
  const hasNoteData = selectedDayNoteInfo && selectedDayNoteInfo?.data.notes.length > 0;
  const date: CalendarInitialSelectedDateType = selectedDateInfo.gregorianDate;

  return (
    <WidgetCardContainer title="یادداشت امروزت">
      {hasNoteData && <SelectedDayNoteList noteList={selectedDayNoteInfo.data.notes} date={date} />}
      {!hasNoteData && <SelectedDayNoNote date={date} />}
    </WidgetCardContainer>
  );
};

export default SelectedDayNote;
