'use client';

import Prevention1Container from '@components/activation/pages/prevention/Prevention1Container/page';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../../routesInfo';

const PreventionStep1 = () => {
  // # رابطه جنسی
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Prevention1Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.prevention_step1}
      />
    </>
  );
};

export default PreventionStep1;
