'use client';

import Prevention6Container from '@components/activation/pages/prevention/Prevention6Container';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { COMPLETE_ACTIVATION_ROUTES } from '../../routesInfo';

const PreventionStep6 = () => {
  // # وزن
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Prevention6Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={COMPLETE_ACTIVATION_ROUTES.prevention_step6}
      />
    </>
  );
};

export default PreventionStep6;
