import { WidgetsButtonTypes } from '@app/(women)/protected/(mainRoutes)/widgetCommon';

export interface PopUpEditCycleFinishPeriodProps {
  startTime: string;
  periodLength: number;
  data: {
    title: string;
    description: string;
    periodLength: number;
    button: WidgetsButtonTypes;
  };
}
