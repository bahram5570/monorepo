import { NextStepTypes } from '@app/(women)/protected/(mainRoutes)/widgetCommon';

import { PopUpTypes } from '../../usePopUpHandlers/types';

export interface UseActionTypeNextStepProps {
  nextStepCompleteHandler: () => void;
  popUpHandler: (v: PopUpTypes) => void;
  isCurrentNextStepFinishedHandler: (b: boolean) => void;
}

export type CallNextStepTypes = (props: { nextStep: NextStepTypes }) => void;
