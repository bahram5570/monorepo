import { useEffect, useState } from 'react';

import useCountDown from '@hooks/useCountDown';
import useCustomToast from '@hooks/useCustomToast';

import { OTP_COUNT_DOWN_TIME } from '../../constants';
import { OtpStatusHandlerTypes, OtpStatusTypes } from './types';

const useOtpStatus = (applyOtpStatus: OtpStatusTypes) => {
  const { onToast } = useCustomToast();
  const [otpStatus, setOtpStatus] = useState<OtpStatusTypes>(null);

  const otpStatusHandler: OtpStatusHandlerTypes = (v) => {
    setOtpStatus(v);

    if (v === 'wrong') {
      onToast({ message: 'کد وارد شده اشتباه است', type: 'error', duration: OTP_COUNT_DOWN_TIME * 1000 });
    }
  };

  const { startCounter } = useCountDown({
    onCallBack: () => otpStatusHandler(null),
    time: OTP_COUNT_DOWN_TIME,
  });

  useEffect(() => {
    if (otpStatus === 'wrong') {
      startCounter();
    }
  }, [otpStatus]);

  useEffect(() => {
    if (applyOtpStatus) {
      setOtpStatus(applyOtpStatus);
    }
  }, [applyOtpStatus]);

  return { otpStatus, otpStatusHandler };
};

export default useOtpStatus;
