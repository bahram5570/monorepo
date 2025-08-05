'use client';

import Pregnancy1Container from '@components/activation/pages/pregnancy/Pregnancy1Container';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Pregnancy1 = () => {
  // # سابقه زایمان
  const { payload, payloadHandler } = useActivationPayload();
  const activationData = useActivationData();

  return (
    <>
      <Pregnancy1Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_ROUTES_INFO.pregnancy_1}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Pregnancy1;
