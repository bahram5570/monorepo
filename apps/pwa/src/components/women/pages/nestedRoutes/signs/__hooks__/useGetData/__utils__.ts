import {
  currentDate,
  gregorianFarsiScriptDate,
  gregorianFarsiWeekNames,
  jalaaliScriptDate,
  jalaaliWeekNames,
} from '@utils/dates';

import {
  CalendarWidgetEnums,
  DayTypeEnums,
} from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/CalendarEnums';
import { CalendarTypeEnum } from '@constants/date.constants';
import moment from 'moment-jalaali';

import {
  CurrentWeightType,
  InfoListTypes,
  InitailBloodPressureTypes,
  InitailBloodSugerTypes,
  InitialSelectedSignsTypes,
  KitTestsTypes,
  SignsDaysListMakerTypes,
  SignsItemsListMakerTypes,
  SignsItemsListTypes,
  SortedSignsListMakerTypes,
} from './types';

export const signsItemsListMaker: SignsItemsListMakerTypes = (start, end, days, calendarType) => {
  const signsItemsList: SignsItemsListTypes = [];
  let beginningDayOfLoop = 0;
  let calendarDaysInterval = 0;

  if (calendarType === CalendarTypeEnum.Gregorian) {
    const startingDay = moment(start, 'YYYY-MM-DD');
    const endingDay = moment(end, 'YYYY-MM-DD');

    const totalDaysOfMonth = startingDay.daysInMonth();
    const firstDayOfStart = Number(startingDay.format('YYYY-MM-DD').split('-')[2]);
    beginningDayOfLoop = 0 - totalDaysOfMonth - firstDayOfStart;
    calendarDaysInterval = endingDay.diff(startingDay, 'day');
  }

  if (calendarType === CalendarTypeEnum.Jalali) {
    const startingDay = moment(start, 'jYYYY/jMM/jDD');
    const endingDay = moment(end, 'jYYYY/jMM/jDD');

    const totalDaysOfMonth = startingDay.daysInMonth();
    const firstDayOfStart = Number(startingDay.format('jYYYY/jMM/jDD').split('/')[2]);
    beginningDayOfLoop = 0 - totalDaysOfMonth - firstDayOfStart;
    calendarDaysInterval = endingDay.diff(startingDay, 'day') + 1;
  }

  for (let i = beginningDayOfLoop; i < calendarDaysInterval; i++) {
    const newDate = moment(start, 'YYYY-MM-DD').add(i, 'day').format('YYYY-MM-DD');
    signsItemsList.push([newDate, { items: days?.[newDate]?.items || [] }]);
  }

  return signsItemsList;
};

export const signsDaysListMaker: SignsDaysListMakerTypes = (signsItemsList, havePregnency, calendarType) => {
  const daysList: InfoListTypes = [];
  const { gDate } = currentDate();

  signsItemsList.forEach((item) => {
    let dayType: DayTypeEnums = DayTypeEnums.None;
    const today = moment(item[0], 'YYYY-MM-DD');
    const day = moment(gDate, 'YYYY-MM-DD');
    const isAfterToday = today.isAfter(day);

    if (isAfterToday) {
      return;
    }

    const dayItems = item[1].items;
    dayItems.forEach((dayItem) => {
      if (dayItem.type === CalendarWidgetEnums.Cycle) {
        dayType = dayItem.data.dayType;
      }
    });

    let temporaryWeight: CurrentWeightType = null;
    let weight: CurrentWeightType = temporaryWeight;
    let kitTests: KitTestsTypes = null;
    let fullDateScript = '';
    let weekName = '';

    const gregorianDate = item[0];
    const initialSelectedSigns: InitialSelectedSignsTypes = [];
    const initailBloodPressure: InitailBloodPressureTypes = [];
    const initailBloodSuger: InitailBloodSugerTypes = [];
    const calendarTypesList: CalendarWidgetEnums[] = [];

    const gregorianMoment = moment(gregorianDate, 'YYYY-MM-DD');
    const jalaaliDate = gregorianMoment.format('jYYYY/jMM/jDD');

    item[1].items.forEach((s) => {
      calendarTypesList.push(s.type);

      if (s.type === CalendarWidgetEnums.Sign) {
        initialSelectedSigns.push(...s.data.signs);
        initailBloodPressure.push(...s.data.bloodPressures);
        initailBloodSuger.push(...s.data.bloodSugers);
        kitTests = { ovulationResult: s.data.ovulationResult, babyChecks: s.data.babyChecks };

        if (s.data.weight) {
          weight = s.data.weight;
        } else if (s.data.currentWeight > 0) {
          weight = s.data.currentWeight;
        } else if (temporaryWeight) {
          weight = temporaryWeight;
        } else {
          weight = null;
        }
      }
    });

    temporaryWeight = weight;

    switch (calendarType) {
      case CalendarTypeEnum.Jalali:
        fullDateScript = jalaaliScriptDate(jalaaliDate);
        weekName = jalaaliWeekNames(moment(jalaaliDate, 'jYYYY/jMM/jDD').day());
        break;
      case CalendarTypeEnum.Gregorian:
        fullDateScript = gregorianFarsiScriptDate(gregorianDate);
        weekName = gregorianFarsiWeekNames(moment(gregorianDate, 'YYYY-MM-DD').day());
        break;
    }

    const dayInfo: InfoListTypes[0] = {
      weight,
      dayType,
      kitTests,
      weekName,
      jalaaliDate,
      gregorianDate,
      havePregnency,
      fullDateScript,
      calendarTypesList,
      initailBloodSuger,
      initialSelectedSigns,
      initailBloodPressure,
    };

    daysList.push(dayInfo);
  });

  return daysList;
};

export const sortedSignsListMaker: SortedSignsListMakerTypes = (daysList, calendarType) => {
  const sortedSignsList = [...daysList];
  let dateFormat = 'jYYYY/jMM/jDD';

  switch (calendarType) {
    case CalendarTypeEnum.Gregorian:
      dateFormat = 'YYYY-MM-DD';
      break;
    case CalendarTypeEnum.Jalali:
      dateFormat = 'jYYYY/jMM/jDD';
      break;
    default:
      dateFormat = 'jYYYY/jMM/jDD';
      break;
  }

  sortedSignsList.sort((a, b) => {
    const aDate = moment(a.gregorianDate, dateFormat).valueOf();
    const bData = moment(b.gregorianDate, dateFormat).valueOf();
    return aDate - bData;
  });

  return sortedSignsList;
};
