'use client';

import Tracker1Container from '@components/activation/pages/tracker/Tracker1Container';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { COMPLETE_ACTIVATION_ROUTES } from '../../routesInfo';

const TrackerStep1 = () => {
  // # حس پریود
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Tracker1Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={COMPLETE_ACTIVATION_ROUTES.tracker_step1}
      />
    </>
  );
};

export default TrackerStep1;
