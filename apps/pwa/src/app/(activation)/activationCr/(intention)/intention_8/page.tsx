'use client';

import CompleteCrRegisterContainer from '@components/activation/CompleteCrRegisterContainer';
import Intention8Container from '@components/activation/pages/intention/Intention8Container/page';
import useRegister from '@hooks/__activation__/useRegister';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Intention8 = () => {
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

      <Intention8Container
        payload={payload}
        activationData={activationData}
        info={ACTIVATION_CR_ROUTES_INFO.intention_8}
        payloadHandler={payloadHandler}
        isLoading={isLoading}
        onRegister={registerHandler}
      />
    </>
  );
};

export default Intention8;
