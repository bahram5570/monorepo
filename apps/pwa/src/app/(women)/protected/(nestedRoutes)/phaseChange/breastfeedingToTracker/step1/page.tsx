'use client';

import Goal3Container from '@components/activation/pages/goal/Goal3Container';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step1 = () => {
  // # هدف نصب
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Goal3Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.step1}
      />
    </>
  );
};

export default Step1;
