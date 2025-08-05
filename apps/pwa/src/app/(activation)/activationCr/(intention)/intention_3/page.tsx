'use client';

import Intention3Container from '@components/activation/pages/intention/Intention3Container/page';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Intention3 = () => {
  // # رابطه در بارداری
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();

  return (
    <>
      <Intention3Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_CR_ROUTES_INFO.intention_3}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Intention3;
