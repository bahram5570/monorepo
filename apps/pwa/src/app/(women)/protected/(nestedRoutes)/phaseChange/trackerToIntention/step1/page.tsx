'use client';

import Intention1Container from '@components/activation/pages/intention/Intention1Container/page';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import usePhaseChangeInstallationPurpose from '../../__hooks__/usePhaseChangeInstallationPurpose';
import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step1 = () => {
  // # اقدام
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  usePhaseChangeInstallationPurpose({ payloadHandler, installationPurpose: 'intention' });

  return (
    <>
      <Intention1Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.step1}
      />
    </>
  );
};

export default Step1;
