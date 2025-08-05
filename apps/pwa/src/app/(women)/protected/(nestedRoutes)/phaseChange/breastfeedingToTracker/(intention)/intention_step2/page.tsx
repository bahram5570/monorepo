'use client';

import Intention2Container from '@components/activation/pages/intention/Intention2Container/page';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../../routesInfo';

const IntentionStep2 = () => {
  // # وضعیت پریود
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Intention2Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.intention_step2}
      />
    </>
  );
};

export default IntentionStep2;
