import { WidgetPeriodReportCardTableProps } from '../types';

type Types = Pick<WidgetPeriodReportCardTableProps, 'cycleLength' | 'periodLength' | 'min' | 'max'>;

export interface WidgetPeriodReportCardLinesProps extends Types {
  rangeExtraSpace: number;
  rangesHeigth: number;
  numbersWidth: number;
}
