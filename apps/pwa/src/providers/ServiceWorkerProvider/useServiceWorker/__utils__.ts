import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';
import { ActionTypeEnum, PopupTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { NotificationsDataTypes } from './types';

export const notifHandlerActionMaker = (data: NotificationsDataTypes) => {
  const action: ActionTypes = {
    api: '',
    internal: '',
    actionTypes: [],
    actionType: ActionTypeEnum.None,
    nextStep: {
      data: {},
      delaySecond: 0,
      isDismissible: false,
      type: PopupTypeEnum.Dialog,
    },
  };

  if (data.Path) {
    action.actionType = ActionTypeEnum.InternalRout;
    action.internal = data.Path;
  } else if (data.link) {
    action.actionType = ActionTypeEnum.ExternalRout;
    action.api = data.link;
  } else {
    const buttonAction: ActionTypes = {
      api: '',
      internal: '',
      actionTypes: [],
      actionType: ActionTypeEnum.Done,
      nextStep: {
        data: {},
        delaySecond: 0,
        isDismissible: false,
        type: PopupTypeEnum.Dialog,
      },
    };

    action.actionType = ActionTypeEnum.NextStep;
    action.nextStep.data = {
      description: data.message,
      first: {
        text: 'متوجه شدم',
        action: buttonAction,
        foregroundColor: '#FFFFFF',
        backgroundColor: '#F24F7A',
      },
    };
  }

  return action;
};
