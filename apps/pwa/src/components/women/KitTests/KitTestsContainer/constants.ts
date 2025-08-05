import { KitTestModuleTypeEnums } from '../enum';
import { KitTestMainScriptsTypes } from './types';

export const kitTestMainScripts: KitTestMainScriptsTypes = {
  [KitTestModuleTypeEnums.BabyCheck]: {
    title: 'انجام تست بارداری',
    subTitle: 'تستی که ازش استفاده میکنی رو انتخاب کن',
  },
  [KitTestModuleTypeEnums.Ovulation]: {
    title: 'انجام تست تخمک‌گذاری',
    subTitle: 'نتیجه کیت تخمک‌گذاریت رو انتخاب کن',
  },
};
