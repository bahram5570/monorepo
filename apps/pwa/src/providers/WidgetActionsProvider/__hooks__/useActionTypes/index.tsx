import { ActionHandlerTypes } from '@providers/WidgetActionsProvider/types';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { UseActionTypesProps } from './types';
import useActionTypeActionList from './useActionTypeActionList';
import useActionTypeApiCall from './useActionTypeApiCall';
import useActionTypeDone from './useActionTypeDone';
import useActionTypeExternalRout from './useActionTypeExternalRout';
import useActionTypeHandleByApp from './useActionTypeHandleByApp';
import useActionTypeInternalRout from './useActionTypeInternalRout';
import useActionTypeNextStep from './useActionTypeNextStep';
import useActionTypeNone from './useActionTypeNone';

const useActionTypes = (props: UseActionTypesProps) => {
  // # Action types

  const { callNextStep } = useActionTypeNextStep({
    popUpHandler: props.popUpHandler,
    nextStepCompleteHandler: props.nextStepCompleteHandler,
    isCurrentNextStepFinishedHandler: props.isCurrentNextStepFinishedHandler,
  });

  const { callActionList } = useActionTypeActionList(props.actionListHandler);

  const { callNone } = useActionTypeNone(props.actionCompleteHandler);
  const { callDone } = useActionTypeDone(props.actionCompleteHandler);
  const { callApiCallHandler } = useActionTypeApiCall(props.actionCompleteHandler);
  const { callHandleByApp } = useActionTypeHandleByApp(props.actionCompleteHandler);
  const { callExternalRout } = useActionTypeExternalRout(props.actionCompleteHandler);
  const { callInternalRout } = useActionTypeInternalRout(props.actionCompleteHandler);

  // # Action handlers

  const actionHandler: ActionHandlerTypes = (action) => {
    if (props.actionList === null) {
      props.actionListValueHandler([action]);
    } else {
      props.actionListValueHandler([...props.actionList, action]);
    }

    if (props.actionListIndex === null) {
      props.actionListIndexValueHandler(0);
    } else {
      props.actionListIndexValueHandler(props.actionListIndex + 1);
    }
  };

  const actionsFinder: ActionHandlerTypes = (action) => {
    switch (action.actionType) {
      case ActionTypeEnum.None:
        callNone();
        break;

      case ActionTypeEnum.InternalRout:
        callInternalRout({ actionInternal: action.internal });
        break;

      case ActionTypeEnum.ApiCall:
        callApiCallHandler(action.api);
        break;

      case ActionTypeEnum.NextStep:
        callNextStep({ nextStep: action.nextStep });
        break;

      case ActionTypeEnum.Done:
        callDone();
        break;

      case ActionTypeEnum.HandleByApp:
        callHandleByApp();
        break;

      case ActionTypeEnum.ExternalRout:
        callExternalRout(action.api);
        break;

      case ActionTypeEnum.ActionList:
        callActionList(action);
        break;
    }
  };

  return { actionHandler, actionsFinder };
};

export default useActionTypes;
