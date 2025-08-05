import { SingleDateTypes } from '../../../__hooks__/useCalendarGetData/types';

export type UseCalendarDayInfoProps = SingleDateTypes;

export type CalendarDayInfoTypes = {
  backgroundColor: string;
  isGiveBirth: boolean;
  dayTypeColor: string;
  cellColor: string;
  dayTitle: string;
};
