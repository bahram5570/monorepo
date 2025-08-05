import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export type RoutinItemsTypes = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  action: ActionTypes;
};

export type RoutinResponseTypes = {
  name: string;
  title: string;
  image: string;
  writerIcon: string;
  writerName: string;
  description: string;
  writerSpeciality: string;
  items: RoutinItemsTypes[];
};
