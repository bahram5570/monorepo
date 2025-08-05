import { UseStoryUpdateProps } from '../types';

export interface UseIsViewProps extends Pick<UseStoryUpdateProps, 'list' | 'isOpen'> {}

export type IsViewListTypes = string[];

export type ViewStoryHandlerTypes = (slideId: string) => void;
