import { CalendarSignsType } from '../../../__hooks__/useCalendarGetData/types';
import { SelectedDaySignsProps } from '../types';

export interface SelectedDaySignsContainerProps extends SelectedDaySignsProps {}

type SingleSignTypes = Pick<Pick<CalendarSignsType, 'data'>['data'], 'signs'>;

export interface SignsListProps extends SingleSignTypes {}
