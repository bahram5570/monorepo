import { TabList } from './TabBtnList/type';
import { TabItemEnum } from './enum';

export const TAB_LIST_NORMAL: TabList = [
  { id: TabItemEnum.WayToCalmDown, label: 'راهکارهای آرام شدن' },
  { id: TabItemEnum.Distract, label: 'حواست رو پرت کن ' },
  { id: TabItemEnum.Diet, label: 'رژیم غذایی و رفتارهای مناسب' },
  { id: TabItemEnum.Speak, label: 'حرف بزن!' },
  { id: TabItemEnum.CriticalSituation, label: 'آمادگی برای شرایط بحرانی' },
];

export const TAB_LIST_DANGER: TabList = [
  { id: TabItemEnum.CriticalSituation, label: 'آمادگی برای شرایط بحرانی' },
  { id: TabItemEnum.WayToCalmDown, label: 'راهکارهای آرام شدن' },
  { id: TabItemEnum.Speak, label: 'حرف بزن!' },
  { id: TabItemEnum.Diet, label: 'رژیم غذایی و رفتارهای مناسب' },
  { id: TabItemEnum.Distract, label: 'حواست رو پرت کن ' },
];
