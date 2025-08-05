'use client';

import Tracker5Container from '@components/activation/pages/tracker/Tracker5Container/page';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Tracker5 = () => {
  // # تاریخ پریود
  const { payload, payloadHandler } = useActivationPayload();
  const activationData = useActivationData();

  return (
    <>
      <Tracker5Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_ROUTES_INFO.tracker_5}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Tracker5;
