import { CalendarTypeEnum } from '@constants/date.constants';
import { SexualStatusEnum } from '@providers/ProfileProvider/__hooks__/useGetProfileData/enum';

import { UserInfoInputGeneratorListType, UserInfoRadioBtnGeneratorListType } from './type';

export const VALUE_NAME = 'value_name';

export const USER_INFO_INPUT_GENERATOR_LIST: UserInfoInputGeneratorListType[] = [
  {
    description: `دوست داری با چه نام قشنگی تو ایمپو صدات کنیم؟ 😍`,
    inputType: 'input',
    label: 'نام',
    name: 'name',
  },
  {
    description: `تو کدوم سال و ماه و روز با اومدنت دنیا رو قشنگ تر کردی؟ 🥹 `,
    inputType: 'modal',
    label: 'تاریخ تولد',
    name: 'birthDate',
  },
  {
    description: `معمولا پریودت چند روز طول می‌کشه؟`,
    inputType: 'modal',
    label: ' طول پریود',
    name: 'periodLength',
  },
  {
    description: `معمولا هر چند روز یک بار پریود می‌شی؟ `,
    inputType: 'modal',
    label: 'طول دوره',
    name: 'cycleLength',
  },
];

export const USER_INFO_RADIO_BTN_GENERATOR_LIST: UserInfoRadioBtnGeneratorListType[] = [
  {
    description: 'برای ارائه بهترین توصیه‌ها برای رابطه جنسی بهتره که بدونیم',
    label: 'رابطه جنسی',
    name: 'sexualStatus',
    listLabel: [
      { name: 'دارم', value: SexualStatusEnum.HasSex },
      { name: 'ندارم', value: SexualStatusEnum.NoSex },
    ],
  },
  {
    description: 'نوع تقویم خود را انتخاب کنید',
    label: 'تقویم',
    name: 'calendarType',
    listLabel: [
      { name: 'شمسی', value: CalendarTypeEnum.Jalali },
      { name: 'میلادی', value: CalendarTypeEnum.Gregorian },
    ],
  },
];
