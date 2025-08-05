'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Prevention5Container from '@components/activation/pages/prevention/Prevention5Container/page';
import useRegister from '@hooks/__activation__/useRegister';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Prevention5 = () => {
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

      <Prevention5Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_ROUTES_INFO.prevention_5}
        isLoading={isLoading}
        onRegister={registerHandler}
      />
    </>
  );
};

export default Prevention5;
