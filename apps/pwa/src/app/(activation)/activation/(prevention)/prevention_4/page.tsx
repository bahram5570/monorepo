'use client';

import Prevention4Container from '@components/activation/pages/prevention/Prevention4Container/page';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Prevention4 = () => {
  // # دوره
  const activationData = useActivationData();
  const { payload, payloadHandler } = useActivationPayload();

  return (
    <>
      <Prevention4Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_ROUTES_INFO.prevention_4}
      />
    </>
  );
};

export default Prevention4;
