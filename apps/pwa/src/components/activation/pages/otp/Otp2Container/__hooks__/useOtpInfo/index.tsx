import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { OtpInfoTypes } from '../../../Otp1Container/types';
import { OTP_INFO_NAME } from '../../../constants';

const useOtpInfo = () => {
  const router = useRouter();
  const [otpInfo, setOtpInfo] = useState<null | OtpInfoTypes>(null);

  useEffect(() => {
    const initialData = sessionStorage.getItem(OTP_INFO_NAME)
      ? (JSON.parse(sessionStorage.getItem(OTP_INFO_NAME) || '') as OtpInfoTypes)
      : null;

    if (initialData === null) {
      router.back();
    } else {
      setOtpInfo(initialData);
    }
  }, []);

  return { ...otpInfo };
};

export default useOtpInfo;
