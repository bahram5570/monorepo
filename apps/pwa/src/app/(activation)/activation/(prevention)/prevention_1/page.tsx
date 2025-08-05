'use client';

import Prevention1Container from '@components/activation/pages/prevention/Prevention1Container/page';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Prevention1 = () => {
  // # رابطه جنسی
  const { payload, payloadHandler } = useActivationPayload();
  const activationData = useActivationData();

  return (
    <>
      <Prevention1Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_ROUTES_INFO.prevention_1}
      />
    </>
  );
};

export default Prevention1;
