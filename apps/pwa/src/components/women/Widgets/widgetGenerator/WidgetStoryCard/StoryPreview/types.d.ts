import { WidgetStoryCardProps } from '../types';

type ListTypes = Pick<Pick<WidgetStoryCardProps, 'data'>['data'], 'list'>;
export interface StoryPreviewPorps extends ListTypes {
  saveHandler?: (storyId: string) => void;
}
