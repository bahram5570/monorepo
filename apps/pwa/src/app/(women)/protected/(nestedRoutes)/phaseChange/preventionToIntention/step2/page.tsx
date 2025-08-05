'use client';

import Intention3Container from '@components/activation/pages/intention/Intention3Container/page';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step2 = () => {
  // # رابطه در بارداری
  const activationData = usePhaseChangeData();
  const { payload, payloadHandler } = usePhaseChangePayload();

  return (
    <>
      <Intention3Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.step2}
      />
    </>
  );
};

export default Step2;
