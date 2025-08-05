import { WidgetSignCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetSignCardProps extends Pick<WidgetSignCardTypes, 'data'> {}

export type SignsItemTypes = Pick<WidgetSignCardProps, 'data'>['data']['signs'][0];

type SelectedSignsTypes = { selectedSigns: Pick<WidgetSignCardProps, 'data'>['data']['selectedSigns'] };

export type IsSelectedFinderTypes = SignsItemTypes & SelectedSignsTypes;
