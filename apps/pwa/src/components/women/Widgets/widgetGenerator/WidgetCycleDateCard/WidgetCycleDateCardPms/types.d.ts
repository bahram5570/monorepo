import { WidgetCycleDateCardProps } from '../types';

type DataTypes = Pick<WidgetCycleDateCardProps, 'data'>['data'];
type PmsTypes = Pick<
  DataTypes,
  'hasPms' | 'pmsStart' | 'pmsEnd' | 'startPmsLabel' | 'endPmsLabel' | 'currentDay' | 'isInLatePeriod'
>;
export interface WidgetCycleDateCardPmsProps extends PmsTypes {
  percentRatio: number;
}
