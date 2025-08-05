import { ActionTypeEnum, PopupTypeEnum } from './widgetEnums';

export type NextStepTypes = {
  data: any;
  type: PopupTypeEnum;
  delaySecond: number;
  isDismissible: boolean;
};

export type ActionTypes = {
  api: string;
  internal: string;
  nextStep: NextStepTypes;
  actionType: ActionTypeEnum;
  actionTypes: ActionTypeEnum[];
};

export type WidgetsButtonTypes = {
  text: string;
  action: ActionTypes;
  backgroundColor: string;
  foregroundColor: string;
};
