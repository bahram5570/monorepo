import { ActionTypes } from './widgetCommon';

export type ActionHandlerTypes = (action: ActionTypes) => void;

export type WidgetActionsContextTypes = {
  actionHandler: ActionHandlerTypes;
  onMountActionsHandler: (v: ActionTypes[]) => void;
};

export type ActionListHandlerTypes = (v: ActionTypes[]) => void;
