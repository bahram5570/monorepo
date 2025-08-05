'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Tracker1Container from '@components/activation/pages/tracker/Tracker1Container';
import useChangePhase from '@hooks/__activation__/useChangePhase';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import usePhaseChangeInstallationPurpose from '../../__hooks__/usePhaseChangeInstallationPurpose';
import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step1 = () => {
  // # حس پریود
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  usePhaseChangeInstallationPurpose({ payloadHandler, installationPurpose: 'tracker' });
  const { phaseChangeHandler, isLoading, fetchedUser } = useChangePhase({ payload, api: 'info/period/enter' });

  return (
    <>
      {fetchedUser && <CompleteRegisterContainer payload={payload} fetchedUser={fetchedUser} />}

      <Tracker1Container
        payload={payload}
        isLoading={isLoading}
        onRegister={phaseChangeHandler}
        payloadHandler={payloadHandler}
        activationData={activationData}
        info={CHANGE_PHASE_ROUTES.step1}
      />
    </>
  );
};

export default Step1;
