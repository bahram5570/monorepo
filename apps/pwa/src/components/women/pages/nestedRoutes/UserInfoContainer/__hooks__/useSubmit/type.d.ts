import { CalendarTypeEnum } from '@constants/date.constants';

export type PayloadType = {
  name: string;
  birthDate: string;
  cycleLength: number;
  periodLength: number;
  sexualStatus: number;
  calendarType: CalendarTypeEnum;
};

export type UseSubmitType = {
  payload: PayloadType;
};
