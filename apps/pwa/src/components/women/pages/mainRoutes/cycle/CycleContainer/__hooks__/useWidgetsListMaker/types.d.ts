import {
  CycleCardTypes,
  WidgetCirculeCycleCardTypes,
  WidgetsTypes,
} from '@providers/WidgetActionsProvider/widgetCards';

import { CycleResponseTypes } from '../../../types';

type CycleWidget = Pick<CycleResponseTypes, 'wigets'>;

export interface UseWidgetsListMakerProps {
  widgets: CycleWidget['wigets'] | undefined;
}

export type CycleWidgetListsTypes = CycleWidget['wigets'] | null;

export type CycleCardDataTypes = Pick<CycleCardTypes, 'data'>['data'] | null;

export type CirculeCycleCardDataTypes = Pick<WidgetCirculeCycleCardTypes, 'data'>['data'] | null;
