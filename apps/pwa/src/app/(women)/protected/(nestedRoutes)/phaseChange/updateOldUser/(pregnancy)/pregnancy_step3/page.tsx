'use client';

import Pregnancy4Container from '@components/activation/pages/pregnancy/Pregnancy4Container';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { COMPLETE_ACTIVATION_ROUTES } from '../../routesInfo';

const PregnancyStep3 = () => {
  // # وزن قبل از بارداری
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Pregnancy4Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={COMPLETE_ACTIVATION_ROUTES.pregnancy_step3}
      />
    </>
  );
};

export default PregnancyStep3;
