import { CIRCLE_TOTAL_AVAILABLE_PROGRESS_PERCENTAGE } from './constants';

export const circleContainerRotateFinder = (initialRotate: number) => {
  return ((1 - CIRCLE_TOTAL_AVAILABLE_PROGRESS_PERCENTAGE) / 2) * 360 - 4 - initialRotate;
};

export const circleItemRotateMaker = (start: number, cycleLength: number) => {
  return ((start * CIRCLE_TOTAL_AVAILABLE_PROGRESS_PERCENTAGE) / cycleLength) * 360;
};
