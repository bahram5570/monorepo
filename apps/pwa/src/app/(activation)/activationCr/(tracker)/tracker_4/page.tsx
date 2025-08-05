'use client';

import Tracker4Container from '@components/activation/pages/tracker/Tracker4Container/page';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Tracker4 = () => {
  // # پیشگیری
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();

  return (
    <>
      <Tracker4Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_CR_ROUTES_INFO.tracker_4}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Tracker4;
