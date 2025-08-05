import { KitTestModuleTypeEnums } from './../enum';
import { KitTestScriptsTypes } from './types';

export const KIT_TEST_RANGE_DEFAULT_RANGE_VALUE = 50;
export const KIT_TEST_RANGE_RESULT_HEIGHT = 65;
export const KIT_TEST_RANGE_LOW_LIMIT = 10;
export const KIT_TEST_RANGE_HIGH_LIMIT = 90;

export const kitTestScripts: KitTestScriptsTypes = {
  [KitTestModuleTypeEnums.BabyCheck]: {
    guideScript: 'رنگ خط تست بیبی‌چکت رو مشخص کن',
    resultLow: 'منفی (عدم بارداری)',
    resultAverage: 'مثبت ضعیف (نیاز به آزمایش)',
    resultHigh: 'مثبت (بارداری)',
  },
  [KitTestModuleTypeEnums.Ovulation]: {
    guideScript: 'رنگ خط کیت تخمک‌گذاریت رو مشخص کن',
    resultLow: 'منفی',
    resultAverage: 'مثبت ضعیف',
    resultHigh: 'مثبت',
  },
};
