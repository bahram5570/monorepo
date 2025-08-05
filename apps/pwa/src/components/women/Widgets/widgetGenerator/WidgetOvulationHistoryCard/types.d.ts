import { WidgetOvulationHistoryCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetOvulationHistoryCardProps
  extends Pick<WidgetOvulationHistoryCardTypes, 'data' | 'isPdfDownloading'> {}
