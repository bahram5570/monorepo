import { AppFeaturesContentsTypes } from '../../types';

export interface UseContentsTypes extends Pick<AppFeaturesContentsTypes, 'currentTab'> {}

export type ContentsStylesTypes = {
  gap: number;
  maxHeight: number;
  gridTemplateRows: `repeat(${number}, ${number}px)`;
  gridTemplateColumns: `repeat(${number}, ${number}px)`;
};
