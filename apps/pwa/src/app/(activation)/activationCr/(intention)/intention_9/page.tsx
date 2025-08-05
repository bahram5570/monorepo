'use client';

import Intention9Container from '@components/activation/pages/intention/Intention9Container';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Intention_9 = () => {
  // # وزن
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();

  return (
    <>
      <Intention9Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_CR_ROUTES_INFO.intention_9}
      />
    </>
  );
};

export default Intention_9;
