import { TabContainerPropsType } from '../type';

type ResultType = Pick<TabContainerPropsType, 'result'>['result'];
type ItemType = Pick<ResultType, 'cityCondition'>;

export interface TabBtnListPropsType {
  activeTab: number;
  handleActiveTab: (tab: number) => void;
}

export type TabList = {
  id: number;
  label: string;
}[];
