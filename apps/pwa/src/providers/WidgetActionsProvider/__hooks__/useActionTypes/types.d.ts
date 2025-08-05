import { Dispatch } from 'react';

import { ActionListHandlerTypes } from '@providers/WidgetActionsProvider/types';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

import { IsCurrentNextStepFinishedHandlerTypes } from '../useIsCurrentNextStepFinished/types';
import { PopUpHandlerTypes } from '../usePopUpHandlers/types';

export interface UseActionTypesProps {
  isCurrentNextStepFinishedHandler: IsCurrentNextStepFinishedHandlerTypes;
  actionListValueHandler: (v: ActionTypes[] | null) => void;
  actionListIndexValueHandler: (v: number | null) => void;
  actionListHandler: ActionListHandlerTypes;
  nextStepCompleteHandler: () => void;
  actionCompleteHandler: () => void;
  actionList: null | ActionTypes[];
  popUpHandler: PopUpHandlerTypes;
  actionListIndex: null | number;
}
