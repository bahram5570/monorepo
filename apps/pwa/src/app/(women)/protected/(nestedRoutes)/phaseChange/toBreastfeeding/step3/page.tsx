'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Breastfeeding3Container from '@components/activation/pages/breastfeeding/Breastfeeding3Container';
import useChangePhase from '@hooks/__activation__/useChangePhase';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step3 = () => {
  // # جنسیت کودک
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  const { phaseChangeHandler, isLoading, fetchedUser } = useChangePhase({ payload, api: 'info/breastfeeding/enter' });

  return (
    <>
      {fetchedUser && <CompleteRegisterContainer payload={payload} fetchedUser={fetchedUser} />}

      <Breastfeeding3Container
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
