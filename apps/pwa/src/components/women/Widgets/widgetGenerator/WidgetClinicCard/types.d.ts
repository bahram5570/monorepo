import { WidgetClinicCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetClinicCardProps extends Pick<WidgetClinicCardTypes, 'data'> {}

type ItemTypes = Pick<WidgetClinicCardProps, 'data'>['data']['items'][0];

export interface ClinicWidgetGeneratorProps extends ItemTypes {}
