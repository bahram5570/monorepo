import { toEnglishNumbers } from '@utils/numbers';

import { UserInfoType } from '../../type';

export const handleValidation = (payload: UserInfoType) => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);

  if (!payload.fullName || !payload.email || !payload.subject || !payload.description || !payload.phoneNumber) {
    return 'تمامی فیلدها الزامی می باشند';
  }

  const isPhoneValid = /^(?:\+98|0)?9\d{9}$/.test(toEnglishNumbers(payload.phoneNumber));
  if (!isPhoneValid) {
    return 'شماره همراه را درست وارد کنید';
  }

  if (!isValidEmail) {
    return 'ایمیل را درست وارد کنید';
  }
};
