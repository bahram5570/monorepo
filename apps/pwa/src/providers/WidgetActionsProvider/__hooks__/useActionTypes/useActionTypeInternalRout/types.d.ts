import { InstallationPurposeEnum } from '@constants/activation.constants';

export type CallInternalRoutTypes = (props: { actionInternal: string }) => void;

export type EnterphaseInstallationPurposeTypes = {
  status: number;
  periodStatus: number;
};

export type CurrentPhase = keyof typeof InstallationPurposeEnum;
