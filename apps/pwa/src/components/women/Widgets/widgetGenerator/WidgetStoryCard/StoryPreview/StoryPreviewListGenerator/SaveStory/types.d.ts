import { StoryPreviewListGeneratorProps } from '../types';

type IsBookmardedTypes = Pick<Pick<StoryPreviewListGeneratorProps, 'storyItems'>['storyItems'], 'isBookmarked'>;
export interface SaveStoryProps extends IsBookmardedTypes {
  selectHandler: () => void;
}
