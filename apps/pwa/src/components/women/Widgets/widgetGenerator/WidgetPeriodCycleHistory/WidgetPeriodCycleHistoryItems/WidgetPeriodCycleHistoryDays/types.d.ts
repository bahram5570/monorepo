import { WidgetPeriodCycleHistoryItemsProps } from '../types';

type DownloadingTypes = Pick<WidgetPeriodCycleHistoryItemsProps, 'isPdfDownloading'>;
type ItemTypes = Pick<WidgetPeriodCycleHistoryItemsProps, 'items'>['items'][0];
type DayTypes = Pick<ItemTypes, 'cycleLength' | 'ovulationDay' | 'periodLength'> & DownloadingTypes;
export interface WidgetPeriodCycleHistoryDaysProps extends DayTypes {}
