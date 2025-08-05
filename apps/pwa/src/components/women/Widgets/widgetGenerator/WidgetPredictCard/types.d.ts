import { WidgetPredictCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetPredictCardProps extends Pick<WidgetPredictCardTypes, 'data'> {}

type ItemsTypes = Pick<WidgetPredictCardProps, 'data'>['data']['items'][0];

export type PredictGeneratorProps = ItemsTypes & {};
