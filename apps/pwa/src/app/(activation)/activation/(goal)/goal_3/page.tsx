'use client';

import Goal3Container from '@components/activation/pages/goal/Goal3Container';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Goal3 = () => {
  // # هدف نصب
  const { payload, payloadHandler } = useActivationPayload();
  const activationData = useActivationData();

  return (
    <>
      <Goal3Container
        payload={payload}
        info={ACTIVATION_ROUTES_INFO.goal_3}
        activationData={activationData}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Goal3;
