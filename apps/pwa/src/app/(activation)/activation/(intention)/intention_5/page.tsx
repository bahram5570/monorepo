'use client';

import Intention5Container from '@components/activation/pages/intention/Intention5Container/page';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Intention5 = () => {
  // # بیماری
  const activationData = useActivationData();
  const { payload, payloadHandler } = useActivationPayload();

  return (
    <>
      <Intention5Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_ROUTES_INFO.intention_5}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Intention5;
