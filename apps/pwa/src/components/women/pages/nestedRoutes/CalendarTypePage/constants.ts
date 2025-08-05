import { ActivationTabsListTypes } from '@components/activation/ActivationTabs/types';
import { CalendarTypeEnum } from '@constants/date.constants';

export const CHANGE_CALENDAR_TYPE_LIST: ActivationTabsListTypes = [
  { text: 'خورشیدی', value: CalendarTypeEnum.Jalali },
  { text: 'میلادی', value: CalendarTypeEnum.Gregorian },
];
