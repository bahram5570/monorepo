import WidgetPragnencyBreastfeedingCard from '@components/women/Widgets/widgetGenerator/WidgetPragnencyBreastfeedingCard';
import WidgetPredictCard from '@components/women/Widgets/widgetGenerator/WidgetPredictCard';
import { GoalNamesEnum } from '@constants/activation.constants';

import PredictFooter from './PredictFooter';
import { PredictCardsProps } from './types';

const PredictCards = ({ selectedGoal, bottomPartData, openDatesHandler }: PredictCardsProps) => {
  const info = bottomPartData[selectedGoal];

  return (
    <div className="relative w-full px-4">
      {info.goal === GoalNamesEnum.PREGNANCY && (
        <>
          <WidgetPragnencyBreastfeedingCard data={info.predictData.data} />
          <PredictFooter
            isPregnancy={true}
            btn={info.predictFooter.btn}
            script={info.predictFooter.script}
            openDatesHandler={openDatesHandler}
          />
        </>
      )}

      {info.goal === GoalNamesEnum.INTENTION && (
        <>
          <WidgetPredictCard data={info.predictData.data} />
          <PredictFooter
            btn={info.predictFooter.btn}
            script={info.predictFooter.script}
            openDatesHandler={openDatesHandler}
          />
        </>
      )}

      {info.goal === GoalNamesEnum.TRACKER && (
        <>
          <WidgetPredictCard data={info.predictData.data} />
          <PredictFooter
            btn={info.predictFooter.btn}
            script={info.predictFooter.script}
            openDatesHandler={openDatesHandler}
          />
        </>
      )}
    </div>
  );
};

export default PredictCards;
