import { useEffect, useState } from 'react';

import { OTP_INFO_NAME } from '../../../constants';
import { OtpInfoTypes } from '../../types';

const useIsPhone = () => {
  const [isPhone, setIsPhone] = useState(true);

  useEffect(() => {
    const hasStoredData = sessionStorage.getItem(OTP_INFO_NAME);
    const initialData = hasStoredData ? (JSON.parse(hasStoredData) as OtpInfoTypes).isPhone : true;
    setIsPhone(initialData);
  }, []);

  const isPhoneToggleHandler = () => {
    setIsPhone(!isPhone);
  };

  const scripts = {
    title: `یک کد 6 رقمی از طرف ایمپو برات ${isPhone ? 'پیامک' : 'ایمیل'} میشه.`,
    description: `برای شروع ${isPhone ? 'شماره همراهت' : 'ایمیلت'} رو وارد کن`,
    subtitle: '',
  };

  return { isPhone, isPhoneToggleHandler, scripts };
};

export default useIsPhone;
