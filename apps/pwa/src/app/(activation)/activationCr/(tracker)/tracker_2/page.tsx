'use client';

import Tracker2Container from '@components/activation/pages/tracker/Tracker2Container';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Tracker2 = () => {
  // # منظم یا نامنظم
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();

  return (
    <>
      <Tracker2Container
        payload={payload}
        payloadHandler={payloadHandler}
        activationData={activationData}
        info={ACTIVATION_CR_ROUTES_INFO.tracker_2}
      />
    </>
  );
};

export default Tracker2;
