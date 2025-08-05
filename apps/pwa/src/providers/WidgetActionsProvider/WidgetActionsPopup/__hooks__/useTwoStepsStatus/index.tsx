import { useEffect, useState } from 'react';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { PopupTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { PopUpTypes } from '../usePopUpHandlers/types';

const useTwoStepsStatus = (popUp: PopUpTypes) => {
  const { getQueryParams } = useQueryParamsHandler();
  const [hasTwoStepsInteractionReward, setHasTwoStepsInteractionReward] = useState(false);

  const isPopupOpen = getQueryParams(MODAL_QUERY_NAME) !== null;

  useEffect(() => {
    if (!isPopupOpen && hasTwoStepsInteractionReward) {
      setHasTwoStepsInteractionReward(false);
    }
  }, [isPopupOpen]);

  useEffect(() => {
    if (popUp && popUp.type === PopupTypeEnum.SexTracker) {
      setHasTwoStepsInteractionReward(true);
    }
  }, [popUp]);

  return { hasTwoStepsInteractionReward };
};

export default useTwoStepsStatus;
