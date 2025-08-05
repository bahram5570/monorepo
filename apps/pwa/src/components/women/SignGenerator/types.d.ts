import { SignsItemTypes } from '../Widgets/widgetGenerator/WidgetSignCard/types';
import { DayTypeEnums } from '../pages/mainRoutes/calendar/__hooks__/useCalendarGetData/CalendarEnums';

export interface SignGeneratorProps extends SignsItemTypes {
  initialIsSelected: boolean;
  onSelect?: () => void;
  selectedDate?: string;
}

export type SignsListTypes = {
  [key in number]: {
    signs: { [key in number]: { title: string } };
    exactDayType?: DayTypeEnums[];
    title: string;
    order: number;
  };
};
