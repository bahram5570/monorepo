'use client';

import Pregnancy3Container from '@components/activation/pages/pregnancy/Pregnancy3Container';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step3 = () => {
  // # هفته بارداری
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Pregnancy3Container
        payload={payload}
        payloadHandler={payloadHandler}
        activationData={activationData}
        info={CHANGE_PHASE_ROUTES.step3}
      />
    </>
  );
};

export default Step3;
