import { PayloadHandlerTypes } from '@components/activation/MainActivationModule/types';
import { InstallationPurposeEnum } from '@constants/activation.constants';

type InstallationPurposeTypes = keyof typeof InstallationPurposeEnum;
export interface UsePhaseChangeInstallationPurposeProps {
  installationPurpose: InstallationPurposeTypes;
  payloadHandler: PayloadHandlerTypes;
}
