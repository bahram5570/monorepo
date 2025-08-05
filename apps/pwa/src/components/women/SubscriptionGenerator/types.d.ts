import { WidgetSubscriptionCardProps } from '../Widgets/widgetGenerator/WidgetSubscriptionCard/types';

type ItemsTypes = Pick<WidgetSubscriptionCardProps, 'data'>['data']['package'];

export interface SubscriptionGeneratorTypes extends ItemsTypes {
  onSelect?: () => void;
  isSelected?: boolean;
}
