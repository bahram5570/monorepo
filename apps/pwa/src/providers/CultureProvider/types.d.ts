import { CalendarTypeEnum } from '@constants/date.constants';

export type CultureTypes = {
  calendarType: CalendarTypeEnum;
};

export type CultureHandlerTypes = (name: keyof CultureTypes, value: CultureTypes[keyof CultureTypes]) => void;

export type CultureConextTypes = {
  culture: CultureTypes;
  cultureHandler: CultureHandlerTypes;
};

export interface CultureProviderTypes {
  children: React.ReactNode;
  defaultValues: CultureTypes | null;
}
