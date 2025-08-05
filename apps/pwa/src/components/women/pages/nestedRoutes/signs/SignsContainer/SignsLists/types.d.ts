import { SlideHandlerTypes } from '../__hooks__/useSignsSlide/types';
import { SignsContainerProps } from '../types';

export interface SignsListsPros extends Pick<SignsContainerProps, 'infoList'> {
  slideHandler: SlideHandlerTypes;
  slide: number;
}
