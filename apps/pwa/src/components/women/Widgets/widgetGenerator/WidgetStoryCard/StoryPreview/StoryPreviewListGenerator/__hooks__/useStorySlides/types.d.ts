import { StoryCtaButtonTypes, StoryImageTypes, StoryVideoTypes } from '@providers/WidgetActionsProvider/widgetCards';

import { ViewStoryHandlerTypes } from '../../../__hooks__/useStoryUpdate/useIsView/types';
import { StoryPreviewListGeneratorProps } from '../../types';

type StoriesTypes = Pick<Pick<StoryPreviewListGeneratorProps, 'storyItems'>['storyItems'], 'stories'>;
type NavigationTypes = Pick<StoryPreviewListGeneratorProps, 'navigateStoryHandler'>;
type ItemsTypes = NavigationTypes & StoriesTypes;
export interface UseStorySlidesProps extends ItemsTypes {
  viewStoryHandler: ViewStoryHandlerTypes;
}

export type SlideIndexHandlerTypes = (goToNextSlide: boolean) => void;

export type StoryEventsCtaButtonTypes = Pick<StoryCtaButtonTypes, 'button'>['button'] | null;
export type StoryEventsVideoTypes = Pick<StoryVideoTypes, 'url'>['url'] | null;
export type StoryEventsImageTypes = Pick<StoryImageTypes, 'url'>['url'] | null;
