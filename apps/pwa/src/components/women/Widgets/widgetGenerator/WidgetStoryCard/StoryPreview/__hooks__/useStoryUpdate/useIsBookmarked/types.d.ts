import { UseStoryUpdateProps } from '../types';

export interface useIsBookmarkedProps extends Pick<UseStoryUpdateProps, 'list' | 'isOpen'> {}

export type IsBookmarkedHandlerTypes = (storyId: string) => void;

export type IsBookmarkedListTypes = string[];

export type ApiInfoTypes = null | { api: string; payload: object; method: 'POST' | 'DELETE' };
