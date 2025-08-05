'use client';

import Tracker8Container from '@components/activation/pages/tracker/Tracker8Container';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Tracker_8 = () => {
  // # وزن
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();

  return (
    <>
      <Tracker8Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_CR_ROUTES_INFO.tracker_8}
      />
    </>
  );
};

export default Tracker_8;
