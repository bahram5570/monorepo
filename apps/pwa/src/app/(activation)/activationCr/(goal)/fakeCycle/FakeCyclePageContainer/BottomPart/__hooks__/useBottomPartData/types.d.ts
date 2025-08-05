import { WidgetPragnencyBreastfeedingCardProps } from '@components/women/Widgets/widgetGenerator/WidgetPragnencyBreastfeedingCard/types';
import { WidgetPredictCardProps } from '@components/women/Widgets/widgetGenerator/WidgetPredictCard/types';
import { GoalNamesEnum } from '@constants/activation.constants';

export type PredictFooterTypes = {
  script: string;
  btn: string;
};

export type BottomPartDataTypes = {
  [GoalNamesEnum.TRACKER]: {
    predictData: WidgetPredictCardProps;
    predictFooter: PredictFooterTypes;
    goal: GoalNamesEnum.TRACKER;
    slides: string[];
  };
  [GoalNamesEnum.INTENTION]: {
    predictData: WidgetPredictCardProps;
    predictFooter: PredictFooterTypes;
    goal: GoalNamesEnum.INTENTION;
    slides: string[];
  };
  [GoalNamesEnum.PREGNANCY]: {
    predictData: WidgetPragnencyBreastfeedingCardProps;
    predictFooter: PredictFooterTypes;
    goal: GoalNamesEnum.PREGNANCY;
    slides: string[];
  };
};
