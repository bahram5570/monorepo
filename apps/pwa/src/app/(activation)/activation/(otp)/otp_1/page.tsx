'use client';

import { useState } from 'react';

import AddToHomeModule from '@components/activation/AddToHomeModule';
import Otp1Container from '@components/activation/pages/otp/Otp1Container';
import { Otp1CompleteHandlerTypes } from '@components/activation/pages/otp/Otp1Container/types';
import { OTP_INFO_NAME } from '@components/activation/pages/otp/constants';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';
import { useRouter } from 'next/navigation';

import Welcoming from './Welcoming';

const Otp1 = () => {
  // # شماره همراه/ ایمیل
  const router = useRouter();
  const activationData = useActivationData();
  const [showAddToHome, setShowAddToHome] = useState(false);
  const { payload, payloadHandler } = useActivationPayload();

  const otp1CompleteHandler: Otp1CompleteHandlerTypes = (info) => {
    payloadHandler({ password: info.password, identity: info.identity });
    sessionStorage.setItem(OTP_INFO_NAME, JSON.stringify(info));
    router.push('otp_2');
  };

  const isModuleRendered = activationData?.question?.[ACTIVATION_ROUTES_INFO.goal_1?.questionId]?.page.options
    ? true
    : false;

  return (
    <>
      {isModuleRendered && <Welcoming onComplete={() => setShowAddToHome(true)} />}
      {showAddToHome && <AddToHomeModule closeModuleHandler={() => setShowAddToHome(false)} />}
      {!showAddToHome && (
        <Otp1Container payload={payload} payloadHandler={payloadHandler} otp1CompleteHandler={otp1CompleteHandler} />
      )}
    </>
  );
};

export default Otp1;
