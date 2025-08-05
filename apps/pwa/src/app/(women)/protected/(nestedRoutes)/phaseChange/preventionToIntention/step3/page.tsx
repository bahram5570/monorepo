'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Intention4Container from '@components/activation/pages/intention/Intention4Container/page';
import useChangePhase from '@hooks/__activation__/useChangePhase';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step3 = () => {
  // # اولین بارداری
  const activationData = usePhaseChangeData();
  const { payload, payloadHandler } = usePhaseChangePayload();

  const { phaseChangeHandler, isLoading, fetchedUser } = useChangePhase({ payload, api: 'info/period/enter' });

  return (
    <>
      {fetchedUser && <CompleteRegisterContainer payload={payload} fetchedUser={fetchedUser} />}

      <Intention4Container
        payload={payload}
        isLoading={isLoading}
        onRegister={phaseChangeHandler}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.step3}
      />
    </>
  );
};

export default Step3;
