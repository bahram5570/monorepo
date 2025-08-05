import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export type OptionTypes = { title: string; action: ActionTypes };

export interface PopupMultiOptionProps {
  data: {
    title: string;
    items: OptionTypes[];
    description: string;
    submit: {
      text: string;
      foregroundColor: string;
      backgroundColor: string;
    };
  };
}

export type SelectHandlerTypes = (i: number) => void;
