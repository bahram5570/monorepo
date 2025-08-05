import { BabyCheckTypeEnums } from '@components/women/KitTests/KitTestBabyCheck/enum';

import { InitialSelectedSignsTypes } from '../(nestedRoutes)/signs/__hooks__/useGetData/types';
import { ActionTypes, WidgetsButtonTypes } from './widgetCommon';
import { WidgetStoryTypeEnum, WidgetsEnum } from './widgetEnums';

type HasEyeIcon = {
  showEyeIcon: true;
  eyeIconColor: string;
};
type NotEyeIcon = {
  showEyeIcon?: false;
};
type EyeIconTypes = HasEyeIcon | NotEyeIcon;

type IsPdfDownloadingTypes = { isPdfDownloading?: boolean };

export type WidgetsTypes = IsPdfDownloadingTypes &
  (
    | CycleCardTypes
    | WidgetCirculeCycleCardTypes
    | MotivationCardTypes
    | StoryCardTypes
    | HintCardTypes
    | ArticleCardTypes
    | WidgetReportCardTypes
    | WidgetShareExperienceCardTypes
    | WidgetSignCardTypes
    | WidgetClinicCardTypes
    | WidgetSubscriptionCardTypes
    | WidgetPragnencyBreastfeedingCardTypes
    | WidgetEmptyReportCardTypes
    | WidgetListTypes
    | WidgetRoutinTypes
    | WidgetPredictCardTypes
    | WidgetPeriodReportCardTypes
    | WidgetPeriodCycleHistoryTypes
    | WidgetMostRepeatedSignsTypes
    | WidgetMostRepeatedSignsEmptyTypes
    | WidgetBabyCheckHistoryCardTypes
    | WidgetOvulationHistoryCardTypes
    | WidgetOvulationKitCardTypes
    | WidgetSexTrackerCardTypes
    | WidgetBabyCheckKitCardTypes
    | WidgetPeriodReportEmptyStateCardTypes
    | WidgetCycleDateCardTypes
    | WidgetMediaTypes
    | WidgetAverageOfcycleLengthsTypes
    | WidgetPregnancyCheckupTypes
  );

// # ----------------------------------------------------------

export type CycleCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.CycleCard;
  data: {
    button: WidgetsButtonTypes[];
    backgroundColour: string;
    forgroundColor: string;
    description: string;
    textColor: string;
    leading: string;
    title: string;
  };
};

// # ----------------------------------------------------------

export type MotivationCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.MotivationCard;
  data: { description: string; title: string; icon: string };
};

// # ----------------------------------------------------------

export type StoryImageTypes = {
  type: WidgetStoryTypeEnum.Image;
  url: string;
};
export type StoryVideoTypes = {
  type: WidgetStoryTypeEnum.Video;
  url: string;
};
export type StoryCtaButtonTypes = {
  type: WidgetStoryTypeEnum.CtaButton;
  button: WidgetsButtonTypes;
};
type StoryEventsTypes = StoryImageTypes | StoryVideoTypes | StoryCtaButtonTypes;

type StoriesTypes = {
  events: StoryEventsTypes[];
  coverImage: string;
  isViewed: boolean;
  time: number;
  id: string;
};

export type StoryCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.StoryCard;
  data: {
    backgroundColour: string;
    description: string;
    title: string;
    list: {
      stories: StoriesTypes[];
      isBookmarked: boolean;
      coverImage: string;
      isViewed: boolean;
      text: string;
      time: number;
      id: string;
    }[];
  };
};

// # ----------------------------------------------------------

export type HintCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.HintCard;
  data: {
    minReadingDuration: number;
    backgroundColour: string;
    description: string;
    title: string;
    list: {
      internalLink: null | string;
      externalLink: null | string;
      writerSpeciality: string;
      isBookmarked: boolean;
      writerIcon: string;
      writerName: string;
      isSeen: boolean;
      text: string;
      id: string;
    }[];
  };
};

// # ----------------------------------------------------------

export type ArticleCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ArticleCard;
  data: {
    backgroundColour: string;
    description: string;
    buttonText: string;
    title: string;
    items: {
      title: string;
      image: string;
      link: string;
    }[];
  };
};

// # ----------------------------------------------------------

type PredictWidgetItemsTypes = EyeIconTypes & {
  backgroundColor: string;
  trailingDown: string;
  trailingUp: string;
  title: string;
  icon: string;
};

export type WidgetPredictCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.Predictcard;
  data: {
    backgroundColour: string;
    description: string;
    title: string;
    items: PredictWidgetItemsTypes[];
  };
};

// # ----------------------------------------------------------

export type WidgetReportCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ReportCard;
  data: {
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    buttonText: string;
    title: string;
    list: {
      backgroundColor: string;
      trailing: string;
      title: string;
      icon: string;
      text: string;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetShareExperienceCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ShareExperienceCard;
  data: {
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    title: string;
    items: {
      shareExperienceId: string;
      approvedProfile: boolean;
      commentCount: number;
      action: ActionTypes[];
      createTime: string;
      likeCount: number;
      disliked: number;
      avatar: string;
      name: string;
      text: string;
    }[];
  };
};

// # ----------------------------------------------------------

type SignsTypes = { category: number; sign: number };

export type WidgetSignCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.SignCard;
  data: {
    selectedSigns: SignsTypes[];
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    signs: SignsTypes[];
    title: string;
  };
};

// # ----------------------------------------------------------

export type WidgetClinicCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ClinicCard;
  data: {
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    title: string;
    items: {
      action: ActionTypes[];
      doctorImage: string;
      ticketType: number;
      doctorId: string;
      subtitle: string;
      tailing: string;
      title: string;
      image: string;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetSubscriptionCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.SubscriptionCard;
  data: {
    headlineButton: WidgetsButtonTypes;
    submitButton: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    title: string;
    package: {
      inAppPurchase: boolean;
      payButtonText: string;
      realValueText: string;
      discountText: string;
      specificText: string;
      totalPayText: string;
      isSpecific: boolean;
      desciption: string;
      realValue: number;
      valueText: string;
      discount: number;
      totalPay: number;
      isFree: boolean;
      vatText: string;
      viewId: string;
      value: number;
      code: string;
      text: string;
      unit: string;
      vat: number;
      id: string;
    };
  };
};

// # ----------------------------------------------------------

type PragnencyBreastfeedingTitlesTypes = EyeIconTypes & {
  icon: string;
  name: string;
  text: string;
  eyeIconColor?: string;
  showEyeIcon?: boolean;
};

export type WidgetPragnencyBreastfeedingCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.PragnencyCard | WidgetsEnum.BreastfeedingCard;
  data: {
    trailingIcon: string | null;
    backgroundColour: string;
    description: string;
    trailing: string;
    title: string;
    image: string;
    tiles: PragnencyBreastfeedingTitlesTypes[];
  };
};

// # ----------------------------------------------------------

export type WidgetEmptyReportCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.EmptyReport;
  data: {
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    percent: number;
    title: string;
    image: string;
    days: number;
    text: string;
  };
};

// # ----------------------------------------------------------

export type WidgetListTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.WidgetList;
  data: {
    widgetList: WidgetsTypes[];
  };
};

// # ----------------------------------------------------------

export type WidgetRoutinTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ProgramCard;
  data: {
    title: string;
    writerIcon: string;
    writerName: string;
    description: string;
    backgroundColour: string;
    writerSpeciality: string;
    button: WidgetsButtonTypes;
  };
};

// # ----------------------------------------------------------

export type WidgetAverageOfcycleLengthsTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.AverageOfcycleLengths;
  data: {
    title: string;
    description: string;
    backgroundColour: string;
    right: {
      title: string;
      length: number;
      description: string;
      filledLength: number;
      centeralText: string;
    };
    left: {
      title: string;
      length: number;
      description: string;
      filledLength: number;
      centeralText: string;
    };
  };
};

// # ----------------------------------------------------------

export type WidgetPeriodReportCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.PeriodReportCard;
  data: {
    min: number;
    max: number;
    title: string;
    cycleLength: number;
    description: string;
    periodLength: number;
    backgroundColour: string;
    items: {
      start: string;
      cycleLength: number;
      periodLength: number;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetPeriodCycleHistoryTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.PeriodCycleHistory;
  data: {
    title: string;
    items: {
      title: string;
      normal: boolean;
      cycleLength: number;
      ovulationDay: number;
      periodLength: number;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetMostRepeatedSignsTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.MostRepeatedSigns;
  data: {
    title: string;
    guidTitle: string;
    description: string;
    guidDescription: string;
    items: {
      sign: number;
      count: number;
      category: number;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetMostRepeatedSignsEmptyTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.MostRepeatedSignsEmpty;
  data: {
    title: string;
    description: string;
    button: WidgetsButtonTypes;
  };
};

// # ----------------------------------------------------------

export type WidgetBabyCheckHistoryCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.BabyCheckHistoryCard;
  data: {
    icon: string;
    title: string;
    description: string;
    button: WidgetsButtonTypes;
    items: {
      text: string;
      negative: string;
      positive: string;
      details: {
        result: number;
        createTime: string;
        type: BabyCheckTypeEnums;
      }[];
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetOvulationHistoryCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.OvulationHistoryCard;
  data: {
    icon: string;
    title: string;
    description: string;
    button: WidgetsButtonTypes;
    items: {
      text: string;
      negative: string;
      positive: string;
      details: {
        result: number;
        createTime: string;
      }[];
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetOvulationKitCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.OvulationKitCard;
  data: {
    title: string;
    count: number;
    result: number;
    createTime: string;
    description: string;
  };
};

// # ----------------------------------------------------------

export type WidgetSexTrackerCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.SexTrackerCard;
  data: {
    title: string;
    description: string;
    signs: InitialSelectedSignsTypes;
  };
};

// # ----------------------------------------------------------

export type WidgetBabyCheckKitCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.BabyCheckKitCard;
  data: {
    title: string;
    description: string;
    items: {
      result: number;
      createTime: string;
      type: BabyCheckTypeEnums;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetPeriodReportEmptyStateCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.PeriodReportEmptyStateCard;
  data: {
    text: string;
    days: number;
    image: string;
    title: string;
    percent: number;
    description: string;
    button: WidgetsButtonTypes;
  };
};

// # ----------------------------------------------------------

export type WidgetCycleDateCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.CycleDateCard;
  data: {
    title: string;
    pmsEnd: number;
    hasPms: boolean;
    pmsStart: number;
    endLabel: string;
    periodEnd: number;
    currentDay: number;
    startLabel: string;
    endPmsLabel: string;
    cycleLength: number;
    description: string;
    periodStart: number;
    endFertility: string;
    fertilityEnd: number;
    ovulationDay: number;
    activeCycle: boolean;
    hasFertility: boolean;
    hasOvulation: boolean;
    startPmsLabel: string;
    endPeriodLabel: string;
    fertilityStart: number;
    startFertility: string;
    ovulationLabel: string;
    currentDayLabel: string;
    startPeriodLable: string;
    backgroundColour: string;
    isInLatePeriod: boolean;
  };
};

// # ----------------------------------------------------------

export type WidgetMediaTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.Media;
  data: {
    url: string;
    width: number;
    height: number;
    action: ActionTypes;
  };
};

// # ----------------------------------------------------------

type WidgetPregnancyCheckupItemTypes = {
  backgroundColor: string;
  description: string;
  icon: string;
  title: string;
  action: ActionTypes;
};

export type WidgetPregnancyCheckupTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.PregnancyCheckup;
  data: {
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    title: string;
    items: WidgetPregnancyCheckupItemTypes[];
  };
};

// # ----------------------------------------------------------

export type WidgetCirculeCycleCardTypes = {
  type: WidgetsEnum.CirculeCycleCard;
  data: {
    title: string;
    pmsEnd: number;
    hasPms: boolean;
    leading: string;
    pmsStart: number;
    periodEnd: number;
    textColor: string;
    currentDay: number;
    background: string;
    cycleLength: number;
    description: string;
    periodStart: number;
    showHelper: boolean;
    fertilityEnd: number;
    ovulationDay: number;
    activeCycle: boolean;
    hasFertility: boolean;
    hasOvulation: boolean;
    forgroundColor: string;
    fertilityStart: number;
    backgroundColour: string;
    button: WidgetsButtonTypes[];
  };
};
