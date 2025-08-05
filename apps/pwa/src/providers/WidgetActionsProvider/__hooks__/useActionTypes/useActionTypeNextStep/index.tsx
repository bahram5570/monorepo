import { useEffect, useRef } from 'react';

import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import { CallNextStepTypes, UseActionTypeNextStepProps } from './types';

const useActionTypeNextStep = ({
  isCurrentNextStepFinishedHandler,
  nextStepCompleteHandler,
  popUpHandler,
}: UseActionTypeNextStepProps) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const pendingStatus = useRef({ isCalled: false, isModalOpen: false });

  const callNextStep: CallNextStepTypes = ({ nextStep }) => {
    pageNavigationHandler({ showProgressBar: true, id: Math.random() });

    popUpHandler(nextStep);
    pendingStatus.current.isCalled = true;
    isCurrentNextStepFinishedHandler(false);
  };

  const isPopupOpen = getQueryParams(MODALS.WIDGET_POPUP) !== null;

  useEffect(() => {
    // # Detects the
    if (pendingStatus.current.isCalled && isPopupOpen) {
      pendingStatus.current.isModalOpen = true;
    }

    // # If all 'pendingStatus' be true, it means the current actionList is completed and must move to the the next 'onMountActions' index.
    if (pendingStatus.current.isCalled && pendingStatus.current.isModalOpen && !isPopupOpen) {
      nextStepCompleteHandler();
      pendingStatus.current = { isCalled: false, isModalOpen: false };
    }
  }, [pendingStatus.current, isPopupOpen]);

  return { callNextStep };
};

export default useActionTypeNextStep;
