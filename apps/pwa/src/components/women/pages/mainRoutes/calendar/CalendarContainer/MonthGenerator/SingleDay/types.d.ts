import { SingleDateTypes } from '../../../__hooks__/useCalendarGetData/types';
import { MonthGeneratorDateTypesTypes, MonthGeneratorProps } from '../types';

export interface SingleDayProps extends Pick<MonthGeneratorProps, 'selectedDateHandler'> {
  isSelected: boolean;
  day: SingleDateTypes;
  dateType: MonthGeneratorDateTypesTypes;
}

export interface HasSignDotProps extends Pick<SingleDayProps, 'day'> {}
