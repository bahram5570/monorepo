'use client';

import CompleteCrRegisterContainer from '@components/activation/CompleteCrRegisterContainer';
import Pregnancy6Container from '@components/activation/pages/pregnancy/Pregnancy6Container';
import useRegister from '@hooks/__activation__/useRegister';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Pregnancy6 = () => {
  // # قد
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

      <Pregnancy6Container
        payload={payload}
        isLoading={isLoading}
        onRegister={registerHandler}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_CR_ROUTES_INFO.pregnancy_6}
      />
    </>
  );
};

export default Pregnancy6;
