'use client';

import Tracker6Container from '@components/activation/pages/tracker/Tracker6Container/page';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Tracker6 = () => {
  // # دوره
  const { payload, payloadHandler } = useActivationPayload();
  const activationData = useActivationData();

  return (
    <>
      <Tracker6Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_ROUTES_INFO.tracker_6}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Tracker6;
