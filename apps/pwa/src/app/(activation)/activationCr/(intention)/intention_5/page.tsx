'use client';

import Intention5Container from '@components/activation/pages/intention/Intention5Container/page';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Intention5 = () => {
  // # بیماری
  const activationData = useActivationCrData();
  const { payload, payloadHandler } = useActivationCrPayload();

  return (
    <>
      <Intention5Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_CR_ROUTES_INFO.intention_5}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Intention5;
