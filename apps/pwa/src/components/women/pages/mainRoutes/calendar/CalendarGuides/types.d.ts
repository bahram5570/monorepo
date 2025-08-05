import { CalendarGuideInfoTypes } from '../__hooks__/useCalendarGetData/types';

export interface CalendarGuidesProps {
  calendarGuideInfo: CalendarGuideInfoTypes | null;
}

export type GuideListTypes = { color: string; text: string; borderColor?: string }[];
