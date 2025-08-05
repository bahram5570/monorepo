'use client';

import Prevention3Container from '@components/activation/pages/prevention/Prevention3Container/page';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Prevention3 = () => {
  // # تاریخ پریود
  const activationData = useActivationData();
  const { payload, payloadHandler } = useActivationPayload();

  return (
    <>
      <Prevention3Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_ROUTES_INFO.prevention_3}
      />
    </>
  );
};

export default Prevention3;
