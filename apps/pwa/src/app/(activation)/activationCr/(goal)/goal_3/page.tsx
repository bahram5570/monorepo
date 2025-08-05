'use client';

import Goal3Container from '@components/activation/pages/goal/Goal3Container';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

import Welcoming from './Welcoming';
import useShowWelcoming from './Welcoming/__hooks__/useShowWelcoming';

const Goal3 = () => {
  // # هدف نصب
  const { payload, payloadHandler } = useActivationCrPayload();
  const { showWelcoming } = useShowWelcoming();
  const activationData = useActivationCrData();

  return (
    <>
      {showWelcoming && <Welcoming />}

      <Goal3Container
        payload={payload}
        info={ACTIVATION_CR_ROUTES_INFO.goal_3}
        activationData={activationData}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Goal3;
