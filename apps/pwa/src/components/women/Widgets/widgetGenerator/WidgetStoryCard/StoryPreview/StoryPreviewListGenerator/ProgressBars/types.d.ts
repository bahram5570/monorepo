import { ViewStoryHandlerTypes } from '../../__hooks__/useStoryUpdate/useIsView/types';
import { SlideIndexHandlerTypes } from '../__hooks__/useStorySlides/types';
import { StoryPreviewListGeneratorProps } from '../types';

type StoriesTypes = Pick<Pick<StoryPreviewListGeneratorProps, 'storyItems'>['storyItems'], 'stories'>;
type SlideTypes = Pick<StoryPreviewListGeneratorProps, 'isCurrentStorySlide'>;
type ItemsTypes = SlideTypes & StoriesTypes;
export interface ProgressBarsProps extends ItemsTypes {
  isLoading: boolean;
  currentSlideIndex: number;
  viewStoryHandler: ViewStoryHandlerTypes;
  slideIndexHandler: SlideIndexHandlerTypes;
}
