import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

const useActionTypeActionList = (actionListHandler: (v: ActionTypes[]) => void) => {
  const callActionList = (actionList: ActionTypes) => {
    const list: ActionTypes[] = [];
    const savedActionTypeList: ActionTypeEnum[] = [];

    actionList.actionTypes.forEach((actionType) => {
      if (!savedActionTypeList.includes(actionType)) {
        const action = { ...actionList };
        action.actionType = actionType;
        list.push(action);
        savedActionTypeList.push(actionType);
      }
    });

    actionListHandler(list);
  };

  return { callActionList };
};

export default useActionTypeActionList;
