'use client';

import Tracker4Container from '@components/activation/pages/tracker/Tracker4Container/page';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../../routesInfo';

const TrackerStep4 = () => {
  // # پیشگیری
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Tracker4Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.tracker_step4}
      />
    </>
  );
};

export default TrackerStep4;
