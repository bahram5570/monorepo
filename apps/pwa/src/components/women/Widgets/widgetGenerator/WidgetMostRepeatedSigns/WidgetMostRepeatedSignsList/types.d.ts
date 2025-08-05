import { WidgetMostRepeatedSignsProps } from '../types';

type DownloadingTypes = Pick<WidgetMostRepeatedSignsProps, 'isPdfDownloading'>;
export interface WidgetMostRepeatedSignsListProps extends DownloadingTypes {
  items: Pick<WidgetMostRepeatedSignsProps, 'data'>['data']['items'];
}
