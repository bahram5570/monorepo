import { StoryCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

type ItemsTypes = Pick<StoryCardTypes, 'data'>['data']['list'];
export type SavedStoriesResponseTypes = {
  total: number;
  items: ItemsTypes;
};
