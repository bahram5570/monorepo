import { StoryCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

import { StoryPreviewPorps } from '../../types';

export interface UseStoryUpdateProps extends Pick<StoryPreviewPorps, 'list'> {
  isOpen: boolean;
}
