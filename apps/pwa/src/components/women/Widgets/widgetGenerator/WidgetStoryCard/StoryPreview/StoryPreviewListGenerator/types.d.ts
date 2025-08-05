import { NavigateStoryHandlerTypes } from '../__hooks__/useListStory/types';
import { IsBookmarkedHandlerTypes } from '../__hooks__/useStoryUpdate/useIsBookmarked/types';
import { ViewStoryHandlerTypes } from '../__hooks__/useStoryUpdate/useIsView/types';
import { StoryPreviewPorps } from '../types';

type StoriesTypes = Pick<StoryPreviewPorps, 'list'>['list'][0];
export interface StoryPreviewListGeneratorProps extends SaveTypes {
  storyItems: StoriesTypes;
  isCurrentStorySlide: boolean;
  viewStoryHandler: ViewStoryHandlerTypes;
  isBookmarkedHandler: IsBookmarkedHandlerTypes;
  navigateStoryHandler: NavigateStoryHandlerTypes;
}
