import { WidgetReportCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetReportCardProps extends Pick<WidgetReportCardTypes, 'data'> {}

type ItemTypes = Pick<WidgetReportCardProps, 'data'>['data']['list'][0];

export interface ReportGeneratorProps extends ItemTypes {}
