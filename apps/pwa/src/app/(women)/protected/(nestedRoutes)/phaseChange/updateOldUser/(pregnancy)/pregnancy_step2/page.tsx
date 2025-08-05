'use client';

import Pregnancy2Container from '@components/activation/pages/pregnancy/Pregnancy2Container';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { COMPLETE_ACTIVATION_ROUTES } from '../../routesInfo';

const PregnancyStep2 = () => {
  // # بیماری زمینه ای
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Pregnancy2Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={COMPLETE_ACTIVATION_ROUTES.pregnancy_step2}
      />
    </>
  );
};

export default PregnancyStep2;
