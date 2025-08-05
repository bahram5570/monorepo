import { WidgetCycleDateCardProps } from '../types';

type DataTypes = Pick<WidgetCycleDateCardProps, 'data'>['data'];
type TodayTypes = Pick<DataTypes, 'currentDay' | 'currentDayLabel' | 'isInLatePeriod'>;
export interface WidgetCycleDateCardTodayProps extends TodayTypes {
  percentRatio: number;
}
