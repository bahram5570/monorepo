import { CycleThemeEnum } from '@services/loginServices/enum';

import { RadioButton } from './type';

export const RADIO_ITEMS_LIST: RadioButton[] = [
  {
    value: CycleThemeEnum.Circule,
    title: ' چرخه‌ای که توی ورژن های قبلی ایمپو میدیدی',
    imageUrl: '/assets/images/old-version.webp',
  },
  {
    value: CycleThemeEnum.Flat,
    title: 'چرخه‌ای که توی آپدیت جدید برات طراحی کردیم',
    imageUrl: '/assets/images/new-version.webp',
  },
];
