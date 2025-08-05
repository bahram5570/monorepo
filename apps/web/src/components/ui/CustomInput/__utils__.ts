import { toEnglishNumbers, toPersianNumbers } from '@utils/numbers';

import { CustomInputResultMakerTypes } from './types';

export const resultMaker: CustomInputResultMakerTypes = (value, numberMode) => {
  return numberMode === 'english' ? toEnglishNumbers(value || '') : toPersianNumbers(value || '');
};
