import { WidgetsButtonTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export interface PopupImageTextButtonProps {
  data: {
    image: string;
    title: string;
    description: string;
    button: WidgetsButtonTypes;
  };
}
