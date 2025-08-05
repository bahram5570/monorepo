import { WidgetBabyCheckHistoryCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetBabyCheckHistoryCardProps
  extends Pick<WidgetBabyCheckHistoryCardTypes, 'data' | 'isPdfDownloading'> {}
