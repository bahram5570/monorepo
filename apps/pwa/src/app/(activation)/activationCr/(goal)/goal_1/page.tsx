'use client';

import Goal1Container from '@components/activation/pages/goal/Goal1Container';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

import useUpdatedRewards from './__hooks__/useUpdateRewards';

const Goal1 = () => {
  // # نام
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();

  const { updatedInfo } = useUpdatedRewards({
    status: payload.status,
    periodStatus: payload.periodStatus,
    info: ACTIVATION_CR_ROUTES_INFO.goal_1,
  });

  return (
    <>
      {updatedInfo && (
        <Goal1Container
          key={updatedInfo.onMountRewardId}
          payload={payload}
          info={updatedInfo}
          activationData={activationData}
          payloadHandler={payloadHandler}
        />
      )}
    </>
  );
};

export default Goal1;
