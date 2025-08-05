import { WidgetsTypes } from '@providers/WidgetActionsProvider/widgetCards';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export type CycleResponseTypes = {
  date: string;
  actions: ActionTypes[];
  backgroundColor: string;
  wigets: ({ order: number } & WidgetsTypes)[];
};
