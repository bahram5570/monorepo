import { ActivationDataTypes } from '@services/activationServices/types';

import { ActivationContainerProps } from '@components/activation/pages/types';
import { ActivationRoutesInfoConditionsTypes, ActivationRoutesInfoTypes } from '@providers/__activation__/types';

type ItemsTypes = Pick<ActivationContainerProps, 'payload' | 'payloadHandler' | 'info' | 'activationData'>;
export interface UsePageInfoProps extends ItemsTypes {}

export type ScriptsTypes = { title: string; subtitle: string; description: string };

type NextPageUrlTypes = Pick<ActivationRoutesInfoConditionsTypes, 'url'>['url'];

type InfoTypes = Omit<ActivationRoutesInfoTypes[0], 'questionId' | 'payloadKeys'>;
export type PageInfoStateTypes = InfoTypes & {
  rewardId?: number;
  firstName: string;
  scripts: ScriptsTypes;
  onMoutnRewardId?: number;
  nextActivation: NextPageUrlTypes;
  rewardData?: Pick<ActivationDataTypes, 'reward'>['reward'];
};

export type NextPageTypes = { rewardId?: number; nextActivation: NextPageUrlTypes };

export type NextPageHandlerTypes = (v: NextPageTypes) => void;
