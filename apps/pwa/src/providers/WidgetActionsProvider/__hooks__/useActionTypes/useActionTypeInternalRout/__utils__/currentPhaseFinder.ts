import { InstallationPurposeEnum } from '@constants/activation.constants';

import { CurrentPhase, EnterphaseInstallationPurposeTypes } from '../types';

export const currentPhaseFinder = (installationPurpose: EnterphaseInstallationPurposeTypes) => {
  const { periodStatus, status } = installationPurpose;

  let currentPhase: CurrentPhase = 'tracker';

  if (status === InstallationPurposeEnum.tracker.status) {
    if (periodStatus === InstallationPurposeEnum.tracker.periodStatus) {
      currentPhase = 'tracker';
    } else if (periodStatus === InstallationPurposeEnum.intention.periodStatus) {
      currentPhase = 'intention';
    } else if (periodStatus === InstallationPurposeEnum.prevention.periodStatus) {
      currentPhase = 'prevention';
    }
  } else if (status === InstallationPurposeEnum.breastfeeding.status) {
    currentPhase = 'breastfeeding';
  } else if (status === InstallationPurposeEnum.pregnancy.status) {
    currentPhase = 'pregnancy';
  }

  return { currentPhase };
};
