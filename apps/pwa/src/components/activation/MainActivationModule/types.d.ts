import { RewardTypes } from '@services/activationServices/types';

import { PageInfoStateTypes } from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo/types';

export type MainActivationModuleProps = PageInfoStateTypes & {
  invalidMessage?: string | false;
  children: React.ReactNode;
  showContinueBtn?: boolean;
  onRegister?: () => void;
  isLoading?: boolean;
  className?: string;
};

export type PayloadHandlerTypes = (v: { [key in string]: string | number | boolean }) => void;

export type CurrentRewardDataTypes = RewardTypes['page'] | undefined;
