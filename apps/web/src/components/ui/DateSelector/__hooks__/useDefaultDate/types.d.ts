import { DateFormatType } from '../../types';

export interface UseDefaultDatePros {
  onDefaultData: (v: { year: string; month: string; day: string }) => void;
  defaultDate: DateFormatType | undefined;
}
