import { WidgetPeriodCycleHistoryTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetPeriodCycleHistoryProps
  extends Pick<WidgetPeriodCycleHistoryTypes, 'data' | 'isPdfDownloading'> {}
