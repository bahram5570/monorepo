import { CalendarOfPregnancySlideTypes } from '../types';

export interface CalendarOfPregnancySlidesGeneratorTypes {
  title: string;
  description: string;
  list: CalendarOfPregnancySlideTypes[];
}

export interface SlidesArrowTypes {
  onClick: () => void;
  isDisabled: boolean;
  isNextSlide: boolean;
}

export interface ItemGeneratorTypes extends CalendarOfPregnancySlideTypes {}

export interface SlidesLongTypes {
  list: CalendarOfPregnancySlideTypes[];
}

export interface SlidesShortTypes {
  list: CalendarOfPregnancySlideTypes[];
}
