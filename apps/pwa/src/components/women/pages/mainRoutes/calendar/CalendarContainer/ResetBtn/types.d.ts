import { ResetKeyHandlerTypes } from '../__hooks__/useInitialSlide/types';
import { CalendarContainerProps } from '../types';

type Types = Pick<CalendarContainerProps, 'selectedDate'>;
export interface ResetBtnProps extends Types {
  resetKeyHandler: ResetKeyHandlerTypes;
}
