import { Blood } from '@assets/icons/Blood.svg';

import { BabyCheckTypeEnums } from '@components/women/KitTests/KitTestBabyCheck/enum';
import { CalendarTypeEnum } from '@constants/date.constants';

import { CalendarWidgetEnums } from './CalendarEnums';

export type BioType = { bodyPercent: number; emotionalPercent: number; cognitivePercent: number };

export type TextBioType = { emotional: string; mental: string; physical: string };

export type NoteType = {
  files: [];
  text: string;
  title: string;
  noteId: string;
  dateTime: string;
  reminder: boolean;
  reminderId: number;
};

export type CalendarCycleType = {
  type: CalendarWidgetEnums.Cycle;
  data: { dayTitle: string; dayType: DayTypeEnums };
};

export type CalendarOvulationKitType = {
  type: CalendarWidgetEnums.OvulationKit;
  data: null;
};

export type CalendarBiorhythmType = {
  type: CalendarWidgetEnums.Biorythem;
  data: { bio: BioType; texts: TextBioType };
};

export type CalendarNoteType = {
  data: { notes: NoteType[] };
  type: CalendarWidgetEnums.Note;
};

export type BloodSugerType = { condition: number; value: number };

export type BloodPressureType = { high: number; low: number };

export type CalendarSignsType = {
  type: CalendarWidgetEnums.Sign;
  data: {
    babyChecks: {
      result: number;
      createTime: string;
      type: BabyCheckTypeEnums;
    }[];
    ovulationResult: { createTime: string; result: number; count: number } | null;
    signs: { category: number; sign: number }[];
    bloodPressures: BloodPressureType[];
    bloodSugers: BloodSugerType[];
    currentWeight: number;
    weight: number;
  };
};

export type ItemsTypes = (
  | CalendarNoteType
  | CalendarCycleType
  | CalendarSignsType
  | CalendarBiorhythmType
  | CalendarOvulationKitType
)[];

export type InfoCalendarResponseTypes = {
  end: string;
  start: string;
  havePregnency: boolean;
  haveBreastfeeding: boolean;
  days: {
    [key in string]: { items: ItemsTypes };
  };
};

export type SingleDateTypes = {
  gregorianDate: string;
  jalaaliDate: string;
  items: ItemsTypes;
  isToday: boolean;
};

export type CalendarDataTypes = {
  [key in string]: SingleDateTypes[];
};

export type CalendarGuideInfoTypes = Pick<InfoCalendarResponseTypes, 'haveBreastfeeding' | 'havePregnency'>;

export type OnValuesTypes = {
  calendarGuideInfo: CalendarGuideInfoTypes;
  calendarData: CalendarDataTypes;
};

export interface UseGetDataProps {
  onValues: (v: OnValuesTypes) => void;
  hasSigns: boolean;
}

export type CalendarIntervalMakerTypes = (start: string, end: string, calendarType: CalendarTypeEnum) => number;

export type CalendarMonthInfoMakerTypes = (
  start: string,
  currentMonth: number,
  calendarType: CalendarTypeEnum,
) => {
  yearAndMonth: string;
  beggingOfMonth: string;
  totalDaysOfMonth: number;
};

export type CalendarDayInfoMakerTypes = (
  start: string,
  currentDay: number,
  calendarType: CalendarTypeEnum,
) => {
  isToday: boolean;
  jalaaliDate: string;
  gregorianDate: string;
};
