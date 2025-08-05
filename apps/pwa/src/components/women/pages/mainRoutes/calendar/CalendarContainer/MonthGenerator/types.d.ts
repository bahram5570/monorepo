import { SelectedDateHandlerTypes } from '../../__hooks__/useCalendar/types';
import { SingleDateTypes } from '../../__hooks__/useCalendarGetData/types';

export interface MonthGeneratorProps {
  selectedDateHandler: SelectedDateHandlerTypes;
  monthList: SingleDateTypes[];
  selectedDate: string;
}

export type MonthGeneratorDateTypesTypes = Extract<keyof SingleDateTypes, 'gregorianDate' | 'jalaaliDate'>;
