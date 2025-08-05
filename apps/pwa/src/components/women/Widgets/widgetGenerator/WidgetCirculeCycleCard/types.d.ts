import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import { CycleWidgetListsTypes } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useWidgetsListMaker/types';
import { WidgetCirculeCycleCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetCirculeCycleCardProps {
  data: Pick<WidgetCirculeCycleCardTypes, 'data'>['data'] | null;
  insideCycleWidgetList: CycleWidgetListsTypes | null;
  loadingStatus: LoadingStatusEnum;
}
