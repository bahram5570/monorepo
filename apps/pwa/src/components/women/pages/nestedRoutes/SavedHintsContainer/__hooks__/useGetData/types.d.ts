import { HintCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

type ItemsTypes = Pick<HintCardTypes, 'data'>['data']['list'];
export type SavedHintsResponseTypes = {
  total: number;
  items: ItemsTypes;
};
