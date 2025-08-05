import { CurrentTabHandlerTypes } from '../__hooks__/useAppFeaturesTabs/types';

export interface AppFeaturesTabsTypes {
  currentTab: number;
  currentTabHandler: CurrentTabHandlerTypes;
}

export interface AppFeaturesTabGeneratorTypes extends AppFeaturesTabsTypes {
  title: string;
  tabIndex: number;
  lastIndex: number;
}
