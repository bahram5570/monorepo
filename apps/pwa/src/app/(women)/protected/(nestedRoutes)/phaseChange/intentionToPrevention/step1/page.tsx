'use client';

import Prevention1Container from '@components/activation/pages/prevention/Prevention1Container/page';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import usePhaseChangeInstallationPurpose from '../../__hooks__/usePhaseChangeInstallationPurpose';
import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step1 = () => {
  // # رابطه جنسی
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  usePhaseChangeInstallationPurpose({ payloadHandler, installationPurpose: 'prevention' });

  return (
    <>
      <Prevention1Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.step1}
      />
    </>
  );
};

export default Step1;
