import { toEnglishNumbers } from '@utils/numbers';

import { InvalidMessageTypes, useValidationProps } from './types';

const useValidation = ({ isPhone, value }: useValidationProps) => {
  const updatedValue = toEnglishNumbers(value);
  let invalidMessage: InvalidMessageTypes = false;

  if (isPhone) {
    if (!/^09/.test(updatedValue)) {
      invalidMessage = 'شماره همراه باید با 09 شروع شود';
    } else if (!/^.{11}$/.test(updatedValue)) {
      invalidMessage = 'شماره همراه باید 11 رقم باشد';
    } else {
      invalidMessage = false;
    }
  }

  if (!isPhone) {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(updatedValue)) {
      invalidMessage = 'فرمت ایمیل اشتباه است';
    } else {
      invalidMessage = false;
    }
  }

  return { invalidMessage: invalidMessage as InvalidMessageTypes };
};

export default useValidation;
