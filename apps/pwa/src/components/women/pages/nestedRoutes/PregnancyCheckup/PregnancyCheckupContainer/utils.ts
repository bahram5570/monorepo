import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { PregnancyCheckupTypeEnum } from './enum';

export const segmentActionHandler = (week: number, type: PregnancyCheckupTypeEnum, name: string) => {
  const action: ActionTypes = {
    actionType: ActionTypeEnum.InternalRout,
    internal: '',
    nextStep: { data: '', delaySecond: 0, isDismissible: false, type: 0 },
    api: '',
    actionTypes: [],
  };

  action.internal = `/checkup?week=${week}&checkupType=${type}&title=${name}`;

  return action;
};
