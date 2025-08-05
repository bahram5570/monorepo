import { InfoListTypes } from '../../__hooks__/useGetData/types';
import { SlideHandlerTypes } from '../__hooks__/useSignsSlide/types';

export interface SignsSelectDayProps {
  slideHandler: SlideHandlerTypes;
  infoList: InfoListTypes;
  slide: number;
}
