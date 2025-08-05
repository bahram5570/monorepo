import { WidgetsButtonTypes } from '@app/(women)/protected/(mainRoutes)/widgetCommon';

export interface PopupInteractionRewardProps {
  data: {
    title: string;
    image: string;
    description: string;
    button: WidgetsButtonTypes;
  };
  hasTwoStepsInteractionReward: boolean;
}
