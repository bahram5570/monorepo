import { ActivationTabsListTypes } from '@components/activation/ActivationTabs/types';
import { CULTURE_INITIAL_VALUES } from '@providers/CultureProvider/constants';

import { CalendarTypeEnum } from './date.constants';

export const ACTIVATION_PAYLOAD_VALUES = {
  height: -1,
  weight: -1,
  status: -1,
  identity: '',
  lastName: '',
  password: '',
  sickness: -1,
  childType: -1,
  pmsStatus: -1,
  firstName: '',
  childName: '',
  birthDate: '',
  nationality: 0,
  phoneModel: '',
  deviceToken: '',
  planingTime: '',
  pregnancyNo: -1,
  sexualStatus: 0,
  hasAboration: -1,
  periodStatus: -1,
  periodLength: -1,
  pregnancyDate: '',
  interfaceCode: '',
  childBirthDate: '',
  onFertilitySex: -1,
  preventionWays: -1,
  childBirthType: -1,
  periodSituation: -1,
  startPeriodDate: '',
  pregnencyCommite: -1,
  totalCycleLength: -1,
  pragnencyDisease: -1,
  isDeliveryDate: false,
  pragnencyHistoryType: -1,
  weightBeforePregnancy: -1,
  preventionSexCommited: -1,
  pragnencyHistoryStatus: -1,
  calendarType: CULTURE_INITIAL_VALUES.calendarType,
  version: process.env.NEXT_PUBLIC_APP_VERSION || '',
};

export const ACTIVATION_WELCOMING_PREVIEWED_NAME = 'welcomingPreviewed';

export const ACTIVATION_REWARD_QUERY_NAME = 'ACTIVATION_REWARD_QUERY_NAME';

export const ACTIVATION_BIRTHDATE_TABS_LIST: ActivationTabsListTypes = [
  { text: 'تقویم خورشیدی', value: CalendarTypeEnum.Jalali },
  { text: 'تقویم میلادی', value: CalendarTypeEnum.Gregorian },
];

export const InstallationPurposeEnum = {
  tracker: { status: 1, periodStatus: 0 },
  intention: { status: 1, periodStatus: 2 },
  prevention: { status: 1, periodStatus: 1 },
  pregnancy: { status: 2, periodStatus: 0 },
  breastfeeding: { status: 3, periodStatus: 0 },
};

export enum PregnancyHistoryStatusEnum {
  fistTime,
  haveKid,
  abortingExperience,
  notMatter,
}

export enum WomanStatusEnum {
  pre,
  menstruation,
  pregnancy,
  breastfeeding,
  menopause,
}

export enum AbortionStatusEnum {
  notImportant,
  hasAbortion,
  hasNotAbortion,
}

export enum PregnancyNoEnum {
  notImportant,
  hasPregnancy,
  hasNotPregnancy,
}

export enum PeriodStatusEnum {
  notImportant,
  prevention,
  intent,
}

export enum PregnancyCommitEnum {
  none,
  moreThan6Month,
  lessThan6Month,
}

export enum PeriodSituationEnum {
  dontKnow,
  regular,
  irregular,
}

export enum OnFertilitySexEnum {
  haveSex,
  dontKnow,
}

export enum PmsStatusEnum {
  None,
  Pms,
  Pmdd,
}

export enum PreventionWaysEnum {
  condom,
  naturalPervention,
  birthControlPills,
  IUD,
  emergencyPill,
  otherWays,
}

export enum PreventionSexCommitedEnum {
  safeDays,
  dontCare,
  dontKnow,
}

export enum PragnencyDiseaseEnum {
  bloodPressure,
  diabetes,
  fate,
  heartDisease,
  asthma,
  dontKnow,
  noProblem,
}

export enum PragnencyHistoryTypeEnum {
  Natural,
  Caesarean,
  NoExperienc,
}

export enum ChildBirthTypeEnum {
  NotImportant = 0,
  NaturalChildBirth = 1,
  CesareanSection = 2,
}

export enum ChildTypeEnum {
  NotImportant = 0,
  Girl = 1,
  Boy = 2,
  Twin = 4,
}

export enum GoalNamesEnum {
  INTENTION,
  TRACKER,
  PREGNANCY,
}
