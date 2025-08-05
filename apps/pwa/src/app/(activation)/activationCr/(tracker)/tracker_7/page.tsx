'use client';

import CompleteCrRegisterContainer from '@components/activation/CompleteCrRegisterContainer';
import Tracker7Container from '@components/activation/pages/tracker/Tracker7Container/page';
import useRegister from '@hooks/__activation__/useRegister';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Tracker7 = () => {
  // # چرخه
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();

  const { isLoading, registerHandler, fetchedUser, pair } = useRegister(payload);

  const partnerData = pair
    ? { question: activationData?.reward[14]?.page, reward: activationData?.reward[52]?.page }
    : undefined;

  return (
    <>
      {fetchedUser && (
        <CompleteCrRegisterContainer payload={payload} partnerData={partnerData} fetchedUser={fetchedUser} />
      )}

      <Tracker7Container
        payload={payload}
        activationData={activationData}
        isLoading={isLoading}
        onRegister={registerHandler}
        info={ACTIVATION_CR_ROUTES_INFO.tracker_7}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Tracker7;
