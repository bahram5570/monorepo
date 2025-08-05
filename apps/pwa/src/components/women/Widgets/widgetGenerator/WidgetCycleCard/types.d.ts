import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import { CycleWidgetListsTypes } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useWidgetsListMaker/types';
import { CycleCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetCycleCardProps {
  insideCycleWidgetList: CycleWidgetListsTypes | null;
  data: Pick<CycleCardTypes, 'data'>['data'] | null;
  loadingStatus: LoadingStatusEnum;
}
