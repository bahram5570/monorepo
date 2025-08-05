import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export interface PopupDialogProps {
  data: {
    image?: string;
    title?: string;
    description?: string;
    first: { backgroundColor: string; foregroundColor: string; text: string; action: ActionTypes };
    second?: { backgroundColor: string; foregroundColor: string; text: string; action: ActionTypes };
  };
}

export type ClickHandlerTypes = (name: 'first' | 'second') => void;
