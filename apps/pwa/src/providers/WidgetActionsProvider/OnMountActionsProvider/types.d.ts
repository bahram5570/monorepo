import { ActionTypes } from '../widgetCommon';

export type OnMountActionsListHandlerTypes = (actionsList: ActionTypes[]) => void;

export type OnMountActionsTypes = {
  onMountActionsListHandler: OnMountActionsListHandlerTypes;
};

export interface OnMountActionsEventListenerProps {
  triggeredHandler: () => void;
}
