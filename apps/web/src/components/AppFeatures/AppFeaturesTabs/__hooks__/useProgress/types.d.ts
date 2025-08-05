import { AppFeaturesTabGeneratorTypes } from '../../types';

export interface UseProgressTypes
  extends Pick<AppFeaturesTabGeneratorTypes, 'currentTab' | 'tabIndex' | 'lastIndex' | 'currentTabHandler'> {}
