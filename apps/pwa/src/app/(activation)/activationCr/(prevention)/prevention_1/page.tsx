'use client';

import Prevention1Container from '@components/activation/pages/prevention/Prevention1Container/page';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Prevention1 = () => {
  // # رابطه جنسی
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();

  return (
    <>
      <Prevention1Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_CR_ROUTES_INFO.prevention_1}
      />
    </>
  );
};

export default Prevention1;
