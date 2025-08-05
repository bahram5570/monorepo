import { WidgetOvulationHistoryCardProps } from '../types';

type ItemsTypes = Pick<WidgetOvulationHistoryCardProps, 'data'>['data']['items'];
export interface WidgetOvulationHistoryCardItemsProps {
  items: ItemsTypes;
  onSelect?: (v: number) => void;
}
