'use client';

import { useEffect, useState } from 'react';

import { UserCookieTypes } from '@utils/cookies';

import Otp2Container from '@components/activation/pages/otp/Otp2Container';
import { OtpStatusTypes } from '@components/activation/pages/otp/Otp2Container/__hooks__/useOtpStatus/types';
import { OTP_COUNT_DOWN_TIME } from '@components/activation/pages/otp/Otp2Container/constants';
import useActivationCrRegister from '@hooks/__activation__/useActivationCrRegister';
import useCountDown from '@hooks/useCountDown';
import { useRouter } from 'next/navigation';

const Otp2 = () => {
  // # کد
  const router = useRouter();
  const { completeRegisterHandler } = useActivationCrRegister();
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [applyOtpStatus, setApplyOtpStatus] = useState<OtpStatusTypes>(null);

  useEffect(() => {
    if (applyOtpStatus) {
      setApplyOtpStatus(null);
    }
  }, [applyOtpStatus]);

  const nextRouteHandler = () => {
    router.push('goal_1');
  };

  const { startCounter } = useCountDown({
    time: OTP_COUNT_DOWN_TIME,
    onCallBack: nextRouteHandler,
  });

  const registerHandler = () => {
    startCounter();
    setIsRegisterSuccess(true);
    setApplyOtpStatus('correct');
  };

  const loginHandler = (v: UserCookieTypes) => {
    sessionStorage.clear();
    completeRegisterHandler(v);
  };

  return (
    <>
      <Otp2Container
        onSubmitLogin={loginHandler}
        applyOtpStatus={applyOtpStatus}
        onSubmitRegister={registerHandler}
        isRegisterSuccess={isRegisterSuccess}
      />
    </>
  );
};

export default Otp2;
