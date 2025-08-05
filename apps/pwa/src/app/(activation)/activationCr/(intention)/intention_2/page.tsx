'use client';

import Intention2Container from '@components/activation/pages/intention/Intention2Container/page';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Intention2 = () => {
  // # وضعیت پریود
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();

  return (
    <>
      <Intention2Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_CR_ROUTES_INFO.intention_2}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Intention2;
