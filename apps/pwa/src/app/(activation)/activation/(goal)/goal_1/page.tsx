'use client';

import Goal1Container from '@components/activation/pages/goal/Goal1Container';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Goal1 = () => {
  // # نام
  const { payload, payloadHandler } = useActivationPayload();
  const activationData = useActivationData();

  return (
    <Goal1Container
      payload={payload}
      activationData={activationData}
      payloadHandler={payloadHandler}
      info={ACTIVATION_ROUTES_INFO.goal_1}
    />
  );
};

export default Goal1;
