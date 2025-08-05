import { DigitalBabyCheckEnum } from './enum';
import { DigitalBabyCheckListTypes } from './types';

export const KIT_TEST_DIGITAL_BABY_CHECK_LIST: DigitalBabyCheckListTypes[] = [
  {
    icon: '/assets/images/digitalBabyCheckPositive.webp',
    babyCheckResult: DigitalBabyCheckEnum.Positive,
    title: 'مثبت',
  },
  {
    icon: '/assets/images/digitalBabyCheckNegative.webp',
    babyCheckResult: DigitalBabyCheckEnum.Negative,
    title: 'منفی',
  },
];
