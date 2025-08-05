import { WidgetsTypes } from '@providers/WidgetActionsProvider/widgetCards';
import { WidgetsEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import WidgetScaleModule from '../WidgetScaleModule';
import WidgetArticleCard from './WidgetArticleCard';
import WidgetAverageOfcycleLengths from './WidgetAverageOfcycleLengths';
import WidgetBabyCheckHistoryCard from './WidgetBabyCheckHistoryCard';
import WidgetBabyCheckKitCard from './WidgetBabyCheckKitCard';
import WidgetClinicCard from './WidgetClinicCard';
import WidgetCycleDateCard from './WidgetCycleDateCard';
import WidgetEmptyReportCard from './WidgetEmptyReportCard';
import WidgetHintCard from './WidgetHintCard';
import WidgetList from './WidgetList';
import WidgetMedia from './WidgetMedia';
import WidgetMostRepeatedSigns from './WidgetMostRepeatedSigns';
import WidgetMostRepeatedSignsEmpty from './WidgetMostRepeatedSignsEmpty';
import WidgetMotivationCard from './WidgetMotivationCard';
import WidgetOvulationHistoryCard from './WidgetOvulationHistoryCard';
import WidgetOvulationKitCard from './WidgetOvulationKitCard';
import WidgetPeriodCycleHistory from './WidgetPeriodCycleHistory';
import WidgetPeriodReportCard from './WidgetPeriodReportCard';
import WidgetPeriodReportEmptyStateCard from './WidgetPeriodReportEmptyStateCard';
import WidgetPragnencyBreastfeedingCard from './WidgetPragnencyBreastfeedingCard';
import WidgetPredictCard from './WidgetPredictCard';
import WidgetPregnancyCheckup from './WidgetPregnancyCheckup';
import WidgetReportCard from './WidgetReportCard';
import WidgetRoutin from './WidgetRoutin';
import WidgetSexTrackerCard from './WidgetSexTrackerCard';
import WidgetShareExperienceCard from './WidgetShareExperienceCard';
import WidgetSignCard from './WidgetSignCard';
import WidgetStoryCard from './WidgetStoryCard';
import WidgetSubscriptionCard from './WidgetSubscriptionCard';

const WidgetGenerator = ({ data, type, isPdfDownloading = false }: WidgetsTypes) => {
  let result: JSX.Element | null = null;

  switch (type) {
    case WidgetsEnum.StoryCard:
      result = <WidgetStoryCard data={data} />;
      break;
    case WidgetsEnum.HintCard:
      result = <WidgetHintCard data={data} />;
      break;
    case WidgetsEnum.Predictcard:
      result = <WidgetPredictCard data={data} />;
      break;
    case WidgetsEnum.ArticleCard:
      result = <WidgetArticleCard data={data} />;
      break;
    case WidgetsEnum.ReportCard:
      result = <WidgetReportCard data={data} />;
      break;
    case WidgetsEnum.EmptyReport:
      result = <WidgetEmptyReportCard data={data} />;
      break;
    case WidgetsEnum.PragnencyCard:
      result = <WidgetPragnencyBreastfeedingCard data={data} />;
      break;
    case WidgetsEnum.BreastfeedingCard:
      result = <WidgetPragnencyBreastfeedingCard data={data} />;
      break;
    case WidgetsEnum.SubscriptionCard:
      result = <WidgetSubscriptionCard data={data} />;
      break;
    case WidgetsEnum.MotivationCard:
      result = <WidgetMotivationCard data={data} />;
      break;
    case WidgetsEnum.ClinicCard:
      result = <WidgetClinicCard data={data} />;
      break;
    case WidgetsEnum.SignCard:
      result = <WidgetSignCard data={data} />;
      break;
    case WidgetsEnum.ShareExperienceCard:
      result = <WidgetShareExperienceCard data={data} />;
      break;
    case WidgetsEnum.BabyCheckHistoryCard:
      result = <WidgetBabyCheckHistoryCard data={data} isPdfDownloading={isPdfDownloading} />;
      break;
    case WidgetsEnum.OvulationHistoryCard:
      result = <WidgetOvulationHistoryCard data={data} isPdfDownloading={isPdfDownloading} />;
      break;
    case WidgetsEnum.PeriodReportCard:
      result = <WidgetPeriodReportCard data={data} />;
      break;
    case WidgetsEnum.PeriodReportEmptyStateCard:
      result = <WidgetPeriodReportEmptyStateCard data={data} />;
      break;
    case WidgetsEnum.MostRepeatedSigns:
      result = <WidgetMostRepeatedSigns data={data} isPdfDownloading={isPdfDownloading} />;
      break;
    case WidgetsEnum.MostRepeatedSignsEmpty:
      result = <WidgetMostRepeatedSignsEmpty data={data} isPdfDownloading={isPdfDownloading} />;
      break;
    case WidgetsEnum.AverageOfcycleLengths:
      result = <WidgetAverageOfcycleLengths data={data} isPdfDownloading={isPdfDownloading} />;
      break;
    case WidgetsEnum.BabyCheckKitCard:
      result = <WidgetBabyCheckKitCard data={data} />;
      break;
    case WidgetsEnum.OvulationKitCard:
      result = <WidgetOvulationKitCard data={data} />;
      break;
    case WidgetsEnum.SexTrackerCard:
      result = <WidgetSexTrackerCard data={data} />;
      break;
    case WidgetsEnum.PeriodCycleHistory:
      result = <WidgetPeriodCycleHistory data={data} isPdfDownloading={isPdfDownloading} />;
      break;
    case WidgetsEnum.CycleDateCard:
      result = <WidgetCycleDateCard data={data} />;
      break;
    case WidgetsEnum.PregnancyCheckup:
      result = <WidgetPregnancyCheckup data={data} />;
      break;
    case WidgetsEnum.WidgetList:
      result = <WidgetList data={data} />;
      break;
    case WidgetsEnum.ProgramCard:
      result = <WidgetRoutin data={data} />;
      break;

    case WidgetsEnum.Media:
      result = <WidgetMedia data={data} />;
      break;
  }

  return result === null ? <></> : <WidgetScaleModule>{result}</WidgetScaleModule>;
};

export default WidgetGenerator;
