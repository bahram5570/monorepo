import { WidgetBabyCheckHistoryCardProps } from '../types';

type ItemsTypes = Pick<WidgetBabyCheckHistoryCardProps, 'data'>['data']['items'];
export interface WidgetBabyCheckHistoryCardItemsProps {
  items: ItemsTypes;
  onSelect?: (v: number) => void;
}
