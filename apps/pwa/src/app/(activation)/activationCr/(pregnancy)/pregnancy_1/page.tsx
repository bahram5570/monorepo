'use client';

import Pregnancy1Container from '@components/activation/pages/pregnancy/Pregnancy1Container';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Pregnancy1 = () => {
  // # سابقه زایمان
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();

  return (
    <>
      <Pregnancy1Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_CR_ROUTES_INFO.pregnancy_1}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Pregnancy1;
