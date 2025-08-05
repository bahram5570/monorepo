'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Pregnancy6Container from '@components/activation/pages/pregnancy/Pregnancy6Container';
import useUpdateOldUser from '@hooks/__activation__/useUpdateOldUser';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { COMPLETE_ACTIVATION_ROUTES } from '../../routesInfo';

const PregnancyStep5 = () => {
  // # قد
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  const { updateHandler, isLoading, pair, fetchedUser } = useUpdateOldUser(payload);

  const partnerData = pair
    ? { question: activationData?.reward[14]?.page, reward: activationData?.reward[52]?.page }
    : undefined;

  return (
    <>
      {fetchedUser && (
        <CompleteRegisterContainer payload={payload} partnerData={partnerData} fetchedUser={fetchedUser} />
      )}

      <Pregnancy6Container
        payload={payload}
        isLoading={isLoading}
        onRegister={updateHandler}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={COMPLETE_ACTIVATION_ROUTES.pregnancy_step5}
      />
    </>
  );
};

export default PregnancyStep5;
