import { WidgetsTypes } from '@providers/WidgetActionsProvider/widgetCards';

import { FakeCyclePageContainerProps } from '../../types';

export interface UseCreateSampleProps extends Pick<FakeCyclePageContainerProps, 'payload'> {}

export type CreateSampleResponse = {
  wigets: ({ order: number } & WidgetsTypes)[];
  backgroundColor: string;
  date: string;
};
