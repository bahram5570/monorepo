import { PregnancyCheckupTypeEnum } from '../../enum';

type ItemType = {
  type: PregnancyCheckupTypeEnum;
  name: string;
  icon: string;
};

type WeekType = {
  isCurrentWeek: boolean;
  week: number;
  label: string;
  needTest: boolean;
  items: ItemType[];
};

type SegmentType = {
  title: string;
  subtitle: string;
  image: string;
  backgroundColor: string;
  foregroundColor: string;
  weeks: WeekType[];
};

export type ResponsePropsType = {
  banner: string;
  segments: SegmentType[];
};
