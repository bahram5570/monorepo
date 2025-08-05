import { MonthsListTypes } from '../../types';

export interface UseCalendarHeadingProps {
  monthsList: MonthsListTypes;
  initialSlide: number | null;
  resetKey: string;
}

export type NavigateHandlerTypes = (nextSlide: boolean) => void;
