import { WidgetsTypes } from '@providers/WidgetActionsProvider/widgetCards';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export type HealthReportResponseTypes = {
  date: string;
  actions: ActionTypes[];
  backgroundColor: string;
  widgets: ({ order: number } & WidgetsTypes)[];
};
