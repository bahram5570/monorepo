'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Pregnancy3Container from '@components/activation/pages/pregnancy/Pregnancy3Container';
import useRegister from '@hooks/__activation__/useRegister';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Pregnancy3 = () => {
  // # هفته بارداری
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

      <Pregnancy3Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_ROUTES_INFO.pregnancy_3}
        isLoading={isLoading}
        onRegister={registerHandler}
      />
    </>
  );
};

export default Pregnancy3;
