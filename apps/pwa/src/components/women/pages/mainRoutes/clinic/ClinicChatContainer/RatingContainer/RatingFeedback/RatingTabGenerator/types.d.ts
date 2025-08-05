import { TabTypes } from '../__hooks__/useSelectTab/types';

export interface RatingTabGeneratorProps {
  tab: TabTypes;
  tabType: TabTypes;
  tabHandler: (v: TabTypes) => void;
}
