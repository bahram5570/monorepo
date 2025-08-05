import { StoryPreviewPorps } from '../../types';

export type UseListStoryTypes = Pick<StoryPreviewPorps, 'list'>['list'];

export type NavigateStoryHandlerTypes = (goToNextStory: boolean) => void;
