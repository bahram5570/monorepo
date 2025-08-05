import { SelectedDateHandlerTypes } from '../__hooks__/useCalendar/types';
import { CalendarDataTypes, SingleDateTypes } from '../__hooks__/useCalendarGetData/types';

export interface CalendarContainerProps {
  selectedDateHandler: SelectedDateHandlerTypes;
  calendarData: CalendarDataTypes;
  selectedDate: string;
  hasResetBtn: boolean;
}

export type MonthsListTypes = [string, SingleDateTypes[]][];
