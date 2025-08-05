'use client';

import Intention6Container from '@components/activation/pages/intention/Intention6Container/page';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Intention6 = () => {
  // # تاریخ پریود
  const { payload, payloadHandler } = useActivationPayload();
  const activationData = useActivationData();

  return (
    <>
      <Intention6Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_ROUTES_INFO.intention_6}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Intention6;
