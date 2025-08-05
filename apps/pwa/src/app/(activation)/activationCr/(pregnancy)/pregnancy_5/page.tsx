'use client';

import Pregnancy5Container from '@components/activation/pages/pregnancy/Pregnancy5Container';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Pregnancy5 = () => {
  // # وزن
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();

  return (
    <>
      <Pregnancy5Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_CR_ROUTES_INFO.pregnancy_5}
      />
    </>
  );
};

export default Pregnancy5;
