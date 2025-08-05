import { useEffect, useState } from 'react';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

const useIsDismissibleAction = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const [isDismissibleAction, setIsDismissibleAction] = useState<ActionTypes | null>(null);
  const [isDismissibleActionResetKey, setIsDismissibleActionResetKey] = useState<number>(0);

  const isDismissibleActionHandler = (v: ActionTypes) => {
    setIsDismissibleAction(v);
  };

  const isPopupOpen = getQueryParams(MODAL_QUERY_NAME) !== null;

  useEffect(() => {
    if (isDismissibleAction !== null && !isPopupOpen) {
      setIsDismissibleActionResetKey(Math.random());
    }
  }, [isDismissibleAction, isPopupOpen]);

  return { isDismissibleAction, isDismissibleActionHandler, isDismissibleActionResetKey };
};

export default useIsDismissibleAction;
