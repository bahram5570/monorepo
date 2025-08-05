import { addZero } from '@utils/scripts';

import { GREGORIAN_FARSI_MONTH_LIST, JALALI_MONTH_LIST } from '@constants/date.constants';

import { ListTypes } from '../useListsMaker/types';

export const DATE_MODULE_JALALI_MONTH_LIST: ListTypes = JALALI_MONTH_LIST.map((item, index) => ({
  title: item,
  value: addZero(index + 1),
}));

export const DATE_MODULE_GREGORIAN_MONTH_LIST: ListTypes = GREGORIAN_FARSI_MONTH_LIST.map((item, index) => ({
  title: item,
  value: addZero(index + 1),
}));
