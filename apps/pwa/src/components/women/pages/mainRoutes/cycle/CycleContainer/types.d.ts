import { WidgetsTypes } from '@providers/WidgetActionsProvider/widgetCards';

import { CycleResponseTypes } from '../types';

export interface ContainerProps {
  children?: React.ReactNode;
  customAppBar?: React.ReactNode;
  data: CycleResponseTypes | undefined;
}
