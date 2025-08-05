'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Pregnancy4Container from '@components/activation/pages/pregnancy/Pregnancy4Container';
import useChangePhase from '@hooks/__activation__/useChangePhase';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step4 = () => {
  // # وزن قبل از بارداری
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  const { phaseChangeHandler, isLoading, fetchedUser } = useChangePhase({ payload, api: 'info/pregnency/enter' });

  return (
    <>
      {fetchedUser && <CompleteRegisterContainer payload={payload} fetchedUser={fetchedUser} />}

      <Pregnancy4Container
        payload={payload}
        isLoading={isLoading}
        onRegister={phaseChangeHandler}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.step4}
      />
    </>
  );
};

export default Step4;
