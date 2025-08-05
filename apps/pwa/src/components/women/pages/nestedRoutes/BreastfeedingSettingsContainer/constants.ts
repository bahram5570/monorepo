import { ChildTypeEnum } from '@constants/activation.constants';

import { BreastfeedingSettingInputGeneratorListType } from './type';

export const BREASTFEEDING_SETTING_INPUT_GENERATOR_LIST: BreastfeedingSettingInputGeneratorListType[] = [
  {
    type: 'modal',
    description: 'با انتخاب تاریخ زایمانت، بهتر میتونیم بهت کمک کنیم',
    label: 'تاریخ زایمان',
    name: 'childBirthDate',
  },
  {
    type: 'RadioButton',
    description: 'جنسیت کوچولوی قشنگت رو انتخاب کن',
    label: 'جنسیت',
    name: 'childType',
    listLabel: [
      { name: 'دختر', value: ChildTypeEnum.Girl },
      { name: 'پسر', value: ChildTypeEnum.Boy },
      { name: 'دوقلو یا بیشتر', value: ChildTypeEnum.Twin },
    ],
  },

  {
    type: 'input',
    description: 'اسم کوچولوی قشنگت رو چی گذاشتی؟',
    label: 'اسم نوزاد',
    name: 'childName',
  },
];
