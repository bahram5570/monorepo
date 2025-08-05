import { ACTIVATION_PAYLOAD_VALUES } from '@constants/activation.constants';

export type ActivationPayloadTypes = typeof ACTIVATION_PAYLOAD_VALUES;

export type ActivationPayloadKeysTypes = keyof ActivationPayloadTypes;

export type OrderOfQuestionScriptsTypes = {
  title: number;
  subtitle: number;
  description: number;
};

export type OrderOfRewardElementsTypes = {
  image: number;
  scripts: number;
};

export type ActivationRoutesInfoConditionsTypes = { url: string | { isRegister: true }; rewardId?: number };

export type ActivationRoutesInfoTypes = {
  [key in string]: {
    questionId: number;
    noBackButton?: boolean;
    onMountRewardId?: number;
    progressPercentage?: number;
    payloadKeys: ActivationPayloadKeysTypes[];
    orderOfRewardElements?: OrderOfRewardElementsTypes;
    orderOfQuestionScripts?: OrderOfQuestionScriptsTypes;
    nextActivationList: {
      condition1?: ActivationRoutesInfoConditionsTypes;
      condition2?: ActivationRoutesInfoConditionsTypes;
      condition3?: ActivationRoutesInfoConditionsTypes;
      condition4?: ActivationRoutesInfoConditionsTypes;
      condition5?: ActivationRoutesInfoConditionsTypes;
    };
  };
};
