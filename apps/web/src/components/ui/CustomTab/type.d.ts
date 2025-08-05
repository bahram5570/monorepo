import { BabyCheckGuideTabEnum } from '@components/pages/babyCheckGuide/BabyCheckGuideContainer/enum';
import { KitGuideTabEnum } from '@components/pages/kitGuide/KitGuideContainer/enum';

export type TabListType = {
  id: BabyCheckGuideTabEnum | KitGuideTabEnum;
  label: string;
}[];

export type CustomTabPropsType = {
  tabList: TabListType;
  handleActiveTab: (tab: string) => void;
  children: React.ReactNode;
  activeTab: string;
};
