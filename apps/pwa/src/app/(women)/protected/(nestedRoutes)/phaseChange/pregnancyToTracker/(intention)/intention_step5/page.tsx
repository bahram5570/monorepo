'use client';

import Intention5Container from '@components/activation/pages/intention/Intention5Container/page';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../../routesInfo';

const IntentionStep5 = () => {
  // # بیماری
  const activationData = usePhaseChangeData();
  const { payload, payloadHandler } = usePhaseChangePayload();

  return (
    <>
      <Intention5Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.intention_step5}
      />
    </>
  );
};

export default IntentionStep5;
