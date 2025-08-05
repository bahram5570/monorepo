import { toGregorianData } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import { ActivationPayloadKeysTypes, ActivationPayloadTypes } from '@providers/__activation__/types';

import { toEnglishNumbers } from './numbers';

export const registerPayloadUpdater = (payload: ActivationPayloadTypes, calendarType: CalendarTypeEnum) => {
  const result = { ...payload };

  Object.keys(result).forEach((k) => {
    const key = k as ActivationPayloadKeysTypes;

    if (result[key] === -1) {
      delete result[key];
    }
  });

  result.identity = toEnglishNumbers(result.identity);

  if (calendarType === CalendarTypeEnum.Jalali) {
    result.startPeriodDate = result.startPeriodDate === '' ? '' : toGregorianData(result.startPeriodDate);
    result.childBirthDate = result.childBirthDate === '' ? '' : toGregorianData(result.childBirthDate);
    result.pregnancyDate = result.pregnancyDate === '' ? '' : toGregorianData(result.pregnancyDate);
    result.birthDate = result.birthDate === '' ? '' : toGregorianData(result.birthDate);
  }

  return { updatedPayload: result };
};
