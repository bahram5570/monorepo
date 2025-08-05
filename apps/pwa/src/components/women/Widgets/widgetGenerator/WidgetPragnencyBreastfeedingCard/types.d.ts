import { WidgetPragnencyBreastfeedingCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetPragnencyBreastfeedingCardProps extends Pick<WidgetPragnencyBreastfeedingCardTypes, 'data'> {}

type ItemsTypes = Pick<WidgetPragnencyBreastfeedingCardProps, 'data'>['data']['tiles'][0];

export type PragnencyBreastfeedingGeneratorProps = ItemsTypes & {};
