import { WidgetCycleDateCardProps } from '../types';

type DataTypes = Pick<WidgetCycleDateCardProps, 'data'>['data'];
type PeriodTypes = Pick<DataTypes, 'periodEnd' | 'startPeriodLable' | 'endPeriodLabel'>;
export interface WidgetCycleDateCardPeriodProps extends PeriodTypes {
  percentRatio: number;
}
