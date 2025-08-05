'use client';

import { createContext, useEffect, useState } from 'react';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useRouter } from 'next/navigation';

import OnMountActionsProvider from './OnMountActionsProvider';
import WidgetActionsPopup from './WidgetActionsPopup';
import usePopUpHandlers from './WidgetActionsPopup/__hooks__/usePopUpHandlers';
import useActionTypes from './__hooks__/useActionTypes';
import useIsCurrentNextStepFinished from './__hooks__/useIsCurrentNextStepFinished';
import useIsDismissibleAction from './__hooks__/useIsDismissibleAction';
import useResetOnPageChange from './__hooks__/useResetOnPageChange';
import { ActionListHandlerTypes, WidgetActionsContextTypes } from './types';
import { ActionTypes } from './widgetCommon';
import { ActionTypeEnum } from './widgetEnums';

export const WidgetActionsContext = createContext<WidgetActionsContextTypes>({
  actionHandler: () => {},
  onMountActionsHandler: () => {},
});

const WidgetActionsProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();
  const { popUpHandler, popUp } = usePopUpHandlers();

  // # onMountActionsList (the 'actions' list sent from back-end)
  const [onMountActionsList, setOnMountActionsList] = useState<null | ActionTypes[]>(null);
  const [onMountActionsListIndex, setOnMountActionsListIndex] = useState<null | number>(null);

  const onMountActionsHandler = (v: ActionTypes[]) => {
    setOnMountActionsList(v);
    setOnMountActionsListIndex(0);
  };

  useEffect(() => {
    if (onMountActionsList !== null && onMountActionsListIndex !== null) {
      actionHandler(onMountActionsList[onMountActionsListIndex]);
    }
  }, [onMountActionsList, onMountActionsListIndex]);

  // # actionList (simple actions in format of array)
  const [actionList, setActionList] = useState<null | ActionTypes[]>(null);
  const [actionListIndex, setActionListIndex] = useState<null | number>(null);
  const { isDismissibleAction, isDismissibleActionHandler, isDismissibleActionResetKey } = useIsDismissibleAction();

  const actionListHandler: ActionListHandlerTypes = (v) => {
    if (actionList === null) {
      setActionList(v);
    } else {
      setActionList([...actionList, ...v]);
    }

    if (actionListIndex === null) {
      setActionListIndex(0);
    } else {
      setActionListIndex(actionListIndex + 1);
    }
  };

  useEffect(() => {
    if (actionList !== null && actionListIndex !== null) {
      const action = actionList[actionListIndex];
      const hasIsDismissible = action.actionType === ActionTypeEnum.NextStep && action.nextStep.isDismissible;

      if (hasIsDismissible) {
        isDismissibleActionHandler(action);
      }

      actionsFinder(action);
    }
  }, [actionList, actionListIndex]);

  useEffect(() => {
    // # If there's a 'isDismissible' action, then always 'actionList' be cleared and set by 'isDismissible' action.
    if (isDismissibleAction !== null) {
      setOnMountActionsList(null);
      setOnMountActionsListIndex(null);

      setActionListIndex(0);
      setActionList([isDismissibleAction]);
    }
  }, [isDismissibleAction, isDismissibleActionResetKey]);

  // # Action complete handlers
  const { isCurrentNextStepFinished, isCurrentNextStepFinishedHandler } = useIsCurrentNextStepFinished();

  const onMountActionsCompleteHandler = () => {
    if (onMountActionsList !== null && onMountActionsListIndex !== null) {
      if (onMountActionsListIndex >= onMountActionsList.length - 1) {
        setOnMountActionsList(null);
        setOnMountActionsListIndex(null);
      } else {
        setOnMountActionsListIndex(onMountActionsListIndex + 1);
      }
    }
  };

  const actionCompleteHandler = () => {
    if (actionList !== null && actionListIndex !== null) {
      const isStoryOpen = getQueryParams(MODALS.STORY_MODAL_ID) !== null;

      if (isStoryOpen) {
        router.back();
      }

      if (actionListIndex >= actionList.length - 1) {
        setActionList(null);
        setActionListIndex(null);
        onMountActionsCompleteHandler();

        const isPopupOpen = getQueryParams(MODALS.WIDGET_POPUP) !== null;

        if (isPopupOpen) {
          router.back();
          isCurrentNextStepFinishedHandler(true);
        }
      } else {
        setActionListIndex(actionListIndex + 1);
      }
    }
  };

  const nextStepCompleteHandler = () => {
    // # If the 'isCurrentNextStepFinished' be false, it means the actionList (nextStep) did not completed. Because the modal was closed by user.
    if (!isCurrentNextStepFinished) {
      popUpHandler(null);
      setActionList(null);
      setActionListIndex(null);
      onMountActionsCompleteHandler();
    }
  };

  // # Action types & handlers
  const { actionHandler, actionsFinder } = useActionTypes({
    actionList,
    popUpHandler,
    actionListIndex,
    actionListHandler,
    actionCompleteHandler,
    nextStepCompleteHandler,
    isCurrentNextStepFinishedHandler,
    actionListValueHandler: (v) => setActionList(v),
    actionListIndexValueHandler: (v) => setActionListIndex(v),
  });

  // # Reset all the values by changing the page
  useResetOnPageChange(() => {
    setActionList(null);
    setActionListIndex(null);
    setOnMountActionsList(null);
    setOnMountActionsListIndex(null);
  });

  return (
    <WidgetActionsContext.Provider value={{ actionHandler, onMountActionsHandler }}>
      <OnMountActionsProvider>{children}</OnMountActionsProvider>
      <WidgetActionsPopup popUp={popUp} />
    </WidgetActionsContext.Provider>
  );
};

export default WidgetActionsProvider;
