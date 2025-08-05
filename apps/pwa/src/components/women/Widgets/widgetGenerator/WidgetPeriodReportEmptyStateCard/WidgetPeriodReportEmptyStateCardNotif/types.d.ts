import { WidgetPeriodReportEmptyStateCardProps } from '../types';

type DataTypes = Pick<WidgetPeriodReportEmptyStateCardProps, 'data'>['data'];
type DaysTypes = Pick<DataTypes, 'percent' | 'text' | 'days'>;
export interface WidgetPeriodReportEmptyStateCardNotifeProps extends DaysTypes {}

export interface CircleProgressProps extends Pick<DaysTypes, 'days' | 'percent'> {}
