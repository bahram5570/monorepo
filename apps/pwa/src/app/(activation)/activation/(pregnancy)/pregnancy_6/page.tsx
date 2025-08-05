'use client';

import Pregnancy6Container from '@components/activation/pages/pregnancy/Pregnancy6Container';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Pregnancy6 = () => {
  // # قد
  const { payload, payloadHandler } = useActivationPayload();
  const activationData = useActivationData();

  return (
    <>
      <Pregnancy6Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_ROUTES_INFO.pregnancy_6}
      />
    </>
  );
};

export default Pregnancy6;
