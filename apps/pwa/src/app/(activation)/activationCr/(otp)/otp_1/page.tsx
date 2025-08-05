'use client';

import Otp1Container from '@components/activation/pages/otp/Otp1Container';
import { Otp1CompleteHandlerTypes } from '@components/activation/pages/otp/Otp1Container/types';
import { OTP_INFO_NAME } from '@components/activation/pages/otp/constants';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';
import { useRouter } from 'next/navigation';

const Otp1 = () => {
  // # شماره همراه/ ایمیل
  const router = useRouter();
  const { payload, payloadHandler } = useActivationCrPayload();

  const otp1CompleteHandler: Otp1CompleteHandlerTypes = (info) => {
    payloadHandler({ password: info.password, identity: info.identity });
    sessionStorage.setItem(OTP_INFO_NAME, JSON.stringify(info));
    router.push('otp_2');
  };

  return <Otp1Container payload={payload} payloadHandler={payloadHandler} otp1CompleteHandler={otp1CompleteHandler} />;
};

export default Otp1;
