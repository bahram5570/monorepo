import { useEffect } from 'react';

import { InstallationPurposeEnum } from '@constants/activation.constants';

import { UsePhaseChangeInstallationPurposeProps } from './types';

const usePhaseChangeInstallationPurpose = ({
  installationPurpose,
  payloadHandler,
}: UsePhaseChangeInstallationPurposeProps) => {
  useEffect(() => {
    payloadHandler({
      status: InstallationPurposeEnum[installationPurpose].status,
      periodStatus: InstallationPurposeEnum[installationPurpose].periodStatus,
    });
  }, []);
};

export default usePhaseChangeInstallationPurpose;
