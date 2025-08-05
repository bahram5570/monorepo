import { NoteType } from '../../../__hooks__/useCalendarGetData/types';
import { CalendarInitialSelectedDateType } from '../../__hooks__/useCalendar/types';

export type SelectedDayNoteListPropsList = {
  noteList: NoteType[];
  date: CalendarInitialSelectedDateType;
};

export type CreateNewNoteBtnPropsType = Pick<SelectedDayNoteListPropsList, 'date'>;
