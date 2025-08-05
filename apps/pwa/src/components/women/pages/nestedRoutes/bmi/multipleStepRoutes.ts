import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

export const multipleStepRoutes = (query: string | null) => {
  const action: ActionTypes = {
    actionType: ActionTypeEnum.InternalRout,
    internal: '',
    nextStep: { data: '', delaySecond: 0, isDismissible: false, type: 0 },
    api: '',
    actionTypes: [],
  };

  if (!query) {
    action.internal = '/cycle';
  } else {
    const splitedQuery = query.split('***');
    const baseUrl = splitedQuery[0];
    const queryString = splitedQuery.slice(1).join('***');

    action.internal = queryString ? `${baseUrl}?${queryString}` : baseUrl;
  }

  return action;
};
