import { WidgetPeriodReportCardTableProps } from '../types';

type ItemTypes = Pick<WidgetPeriodReportCardTableProps, 'items'>['items'][0];
type MinMaxTypes = Pick<WidgetPeriodReportCardTableProps, 'min' | 'max'>;
type Types = ItemTypes & MinMaxTypes;
export interface WidgetPeriodReportCardCandleGeneratorProps extends Types {}
