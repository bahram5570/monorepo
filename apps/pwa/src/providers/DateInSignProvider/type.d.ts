import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export type ChangeCurrentDateTypes = (date: string) => void;

export type DateInSignContextTypes = {
  changeCurrentDate: ChangeCurrentDateTypes;
  hasSignsChanged: boolean;
  changeSignsStaus: () => void;
  calendarInitailSelectedDate: string | null;
};

export type ActionListHandlerTypes = (v: ActionTypes[]) => void;
