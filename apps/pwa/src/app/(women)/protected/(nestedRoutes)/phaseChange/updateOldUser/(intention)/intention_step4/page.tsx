'use client';

import Intention4Container from '@components/activation/pages/intention/Intention4Container/page';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { COMPLETE_ACTIVATION_ROUTES } from '../../routesInfo';

const IntentionStep4 = () => {
  // # اولین بارداری
  const activationData = usePhaseChangeData();
  const { payload, payloadHandler } = usePhaseChangePayload();

  return (
    <>
      <Intention4Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={COMPLETE_ACTIVATION_ROUTES.intention_step4}
      />
    </>
  );
};

export default IntentionStep4;
