'use client';

import Prevention6Container from '@components/activation/pages/prevention/Prevention6Container';
import Tracker3Container from '@components/activation/pages/tracker/Tracker3Container/page';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { COMPLETE_ACTIVATION_ROUTES } from '../../routesInfo';

const PreventionStep3 = () => {
  // # بیماری
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Tracker3Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={COMPLETE_ACTIVATION_ROUTES.prevention_step3}
      />
    </>
  );
};

export default PreventionStep3;
