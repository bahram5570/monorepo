import { WidgetPeriodCycleHistoryProps } from '../types';

type DownloadingTypes = Pick<WidgetPeriodCycleHistoryProps, 'isPdfDownloading'>;
type ItemsTypes = Pick<WidgetPeriodCycleHistoryProps, 'data'>['data']['items'];
export interface WidgetPeriodCycleHistoryItemsProps extends DownloadingTypes {
  items: ItemsTypes;
}
