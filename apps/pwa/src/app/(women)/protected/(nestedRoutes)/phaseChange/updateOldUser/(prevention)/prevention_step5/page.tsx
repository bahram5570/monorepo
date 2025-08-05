'use client';

import Prevention2Container from '@components/activation/pages/prevention/Prevention2Container/page';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { COMPLETE_ACTIVATION_ROUTES } from '../../routesInfo';

const prevention_step5 = () => {
  // # روش پیشگیری
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <Prevention2Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={COMPLETE_ACTIVATION_ROUTES.prevention_step5}
      />
    </>
  );
};

export default prevention_step5;
