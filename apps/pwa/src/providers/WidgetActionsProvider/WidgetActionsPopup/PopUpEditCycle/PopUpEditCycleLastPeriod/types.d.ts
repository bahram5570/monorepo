import { WidgetsButtonTypes } from '@app/(women)/protected/(mainRoutes)/widgetCommon';

import { EditPageTypes } from '../types';

export interface PopUpEditCycleLastPeriodProps {
  startTime: string;
  startTimeHandler: (v: string) => void;
  editPageHandler: (v: EditPageTypes) => void;
  data: {
    title: string;
    description: string;
    periodLength: number;
    button: WidgetsButtonTypes;
  };
}
