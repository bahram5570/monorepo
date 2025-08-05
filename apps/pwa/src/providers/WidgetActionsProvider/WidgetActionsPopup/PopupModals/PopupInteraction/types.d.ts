import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export interface PopupInteractionProps {
  data: {
    image?: string;
    title?: string;
    description?: string;
    button: { backgroundColor: string; foregroundColor: string; text: string; action: ActionTypes };
    secondaryButton?: { backgroundColor: string; foregroundColor: string; text: string; action: ActionTypes };
  };
}

export type ClickHandlerTypes = (name: 'first' | 'second') => void;
