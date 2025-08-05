'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Tracker7Container from '@components/activation/pages/tracker/Tracker7Container/page';
import useRegister from '@hooks/__activation__/useRegister';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Tracker7 = () => {
  // # چرخه
  const { payload, payloadHandler } = useActivationPayload();
  const activationData = useActivationData();

  const { isLoading, registerHandler, fetchedUser, notificationReward, pair } = useRegister(payload);

  const partnerData = pair
    ? { question: activationData?.reward[14]?.page, reward: activationData?.reward[52]?.page }
    : undefined;

  return (
    <>
      {fetchedUser && (
        <CompleteRegisterContainer
          payload={payload}
          clearStorage={true}
          partnerData={partnerData}
          fetchedUser={fetchedUser}
          // accessNotificationData={notificationReward}
        />
      )}

      <Tracker7Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_ROUTES_INFO.tracker_7}
        payloadHandler={payloadHandler}
        isLoading={isLoading}
        onRegister={registerHandler}
      />
    </>
  );
};

export default Tracker7;
