'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Prevention7Container from '@components/activation/pages/prevention/Prevention7Container';
import useUpdateOldUser from '@hooks/__activation__/useUpdateOldUser';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { COMPLETE_ACTIVATION_ROUTES } from '../../routesInfo';

const PreventionStep7 = () => {
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

      <Prevention7Container
        payload={payload}
        isLoading={isLoading}
        onRegister={updateHandler}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={COMPLETE_ACTIVATION_ROUTES.prevention_step7}
      />
    </>
  );
};

export default PreventionStep7;
