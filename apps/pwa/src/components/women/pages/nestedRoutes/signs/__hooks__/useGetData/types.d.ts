import { BabyCheckTypeEnums } from '@components/women/KitTests/KitTestBabyCheck/enum';
import {
  CalendarWidgetEnums,
  DayTypeEnums,
} from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/CalendarEnums';
import {
  CalendarSignsType,
  InfoCalendarResponseTypes,
  ItemsTypes,
} from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/types';
import { CalendarTypeEnum } from '@constants/date.constants';

export type InitialSelectedSignsTypes = Pick<CalendarSignsType, 'data'>['data']['signs'];
export type InitailBloodPressureTypes = Pick<CalendarSignsType, 'data'>['data']['bloodPressures'];
export type InitailBloodSugerTypes = Pick<CalendarSignsType, 'data'>['data']['bloodSugers'];

export type CurrentWeightType = number | null;

export type KitTestsTypes = null | {
  babyChecks: {
    result: number;
    createTime: string;
    type: BabyCheckTypeEnums;
  }[];
  ovulationResult: null | { result: number; createTime: string; count: number };
};

export type InfoListTypes = {
  initialSelectedSigns: InitialSelectedSignsTypes;
  initailBloodPressure: InitailBloodPressureTypes;
  initailBloodSuger: InitailBloodSugerTypes;
  calendarTypesList: CalendarWidgetEnums[];
  fullDateScript: string;
  weight: CurrentWeightType;
  kitTests: KitTestsTypes;
  gregorianDate: string;
  havePregnency: boolean;
  dayType: DayTypeEnums;
  jalaaliDate: string;
  weekName: string;
}[];

export type SignsItemsListTypes = [string, { items: ItemsTypes }][];

export type SignsItemsListMakerTypes = (
  start: InfoCalendarResponseTypes['start'],
  end: InfoCalendarResponseTypes['end'],
  days: InfoCalendarResponseTypes['days'],
  calendarType: CalendarTypeEnum,
) => SignsItemsListTypes;

export type SignsDaysListMakerTypes = (
  signsItemsList: SignsItemsListTypes,
  havePregnency: InfoCalendarResponseTypes['havePregnency'],
  calendarType: CalendarTypeEnum,
) => InfoListTypes;

export type SortedSignsListMakerTypes = (daysList: InfoListTypes, calendarType: CalendarTypeEnum) => InfoListTypes;
