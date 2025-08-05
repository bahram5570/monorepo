'use client';

import Intention2Container from '@components/activation/pages/intention/Intention2Container/page';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Intention2 = () => {
  // # وضعیت پریود
  const { payload, payloadHandler } = useActivationPayload();
  const activationData = useActivationData();

  return (
    <>
      <Intention2Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_ROUTES_INFO.intention_2}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Intention2;
