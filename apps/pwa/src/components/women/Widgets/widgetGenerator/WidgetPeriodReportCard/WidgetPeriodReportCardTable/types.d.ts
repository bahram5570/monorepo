import { WidgetPeriodReportCardProps } from '../types';

type DataTypes = Pick<WidgetPeriodReportCardProps, 'data'>['data'];
type TableTypes = Pick<DataTypes, 'items' | 'min' | 'max' | 'periodLength' | 'cycleLength'>;

export interface WidgetPeriodReportCardTableProps extends TableTypes {}
