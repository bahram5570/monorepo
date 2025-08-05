'use client';

import Tracker2Container from '@components/activation/pages/tracker/Tracker2Container';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { COMPLETE_ACTIVATION_ROUTES } from '../../routesInfo';

const TrackerStep2 = () => {
  // # منظم یا نامنظم
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Tracker2Container
        payload={payload}
        payloadHandler={payloadHandler}
        activationData={activationData}
        info={COMPLETE_ACTIVATION_ROUTES.tracker_step2}
      />
    </>
  );
};

export default TrackerStep2;
