'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Prevention2Container from '@components/activation/pages/prevention/Prevention2Container/page';
import useChangePhase from '@hooks/__activation__/useChangePhase';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Prevention2 = () => {
  // # روش پیشگیری
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  const { phaseChangeHandler, isLoading, fetchedUser } = useChangePhase({ payload, api: 'info/period/enter' });

  const partnerData = { question: activationData?.reward[14]?.page, reward: activationData?.reward[52]?.page };

  return (
    <>
      {fetchedUser && (
        <CompleteRegisterContainer payload={payload} partnerData={partnerData} fetchedUser={fetchedUser} />
      )}

      <Prevention2Container
        payload={payload}
        isLoading={isLoading}
        onRegister={phaseChangeHandler}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.step2}
      />
    </>
  );
};

export default Prevention2;
