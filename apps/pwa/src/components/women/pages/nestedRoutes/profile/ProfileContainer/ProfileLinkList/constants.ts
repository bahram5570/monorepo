import AboutUsIcon from '@assets/icons/aboutus.svg';
import ChartIcon from '@assets/icons/chart.svg';
// import Setting from '@assets/icons/setting.svg';
import EditCycleIcon from '@assets/icons/edit-cycle.svg';
import EditActivationIcon from '@assets/icons/editActivation.svg';
import InterfaceCodeIcon from '@assets/icons/interfacecode.svg';
import SaveIcon from '@assets/icons/save.svg';
import SavedHintsIcon from '@assets/icons/savedHints.svg';
import SupportIcon from '@assets/icons/support.svg';
import UserIcon from '@assets/icons/user.svg';
import CalendarTypeIcon from '@assets/icons/calendarType.svg';
import PartnerIcon from '@assets/icons/widgetPartner.svg';

import { ProfileLinkListType } from '../ProfileLinkGenerator/type';

export const PROFILE_MODAL_QUERY_NAME = 'profileQueryName';

export const PROFILE_LINK_LIST: ProfileLinkListType = [
  {
    name: 'نحوه نمایش چرخه',
    link: '/protected/editCycleSetting',
    Icon: EditCycleIcon,
    needsSubscription: true,
  },
  {
    name: 'ویرایش سوالات فعالسازی',
    link: '/protected/editActivation',
    Icon: EditActivationIcon,
    needsSubscription: true,
  },
  {
    name: 'نوع نمایش تقویم',
    link: '/protected/calendarType',
    Icon: CalendarTypeIcon,
    needsSubscription: true,
  },
  {
    name: 'اطلاعات کاربری',
    link: '/protected/userInfo',
    Icon: UserIcon,
    needsSubscription: false,
  },
  {
    name: 'استوری ذخیره شده',
    link: '/protected/savedStories',
    Icon: SaveIcon,
    needsSubscription: true,
  },
  {
    name: 'توصیه‌های ذخیره شده',
    link: '/protected/savedHints',
    Icon: SavedHintsIcon,
    needsSubscription: true,
  },
  {
    name: 'همدل',
    link: '/protected/partnerSetting',
    Icon: PartnerIcon,
    needsSubscription: false,
  },
  {
    name: 'گزارش قاعدگی',
    link: '/protected/healthReport',
    Icon: ChartIcon,
    needsSubscription: true,
  },
  {
    name: 'کد معرف',
    link: '/protected/identifictionCode',
    Icon: InterfaceCodeIcon,
    needsSubscription: false,
  },
  {
    name: 'پشتیبانی',
    link: '/protected/support',
    Icon: SupportIcon,
    needsSubscription: false,
  },
  {
    name: 'درباره ما',
    link: '/protected/aboutUs',
    Icon: AboutUsIcon,
    needsSubscription: false,
  },
  // {
  //   name: 'تنظیمات برنامه',
  //   link: '/profile',
  //   Icon: Setting,
  //   needsSubscription: false,
  // },
];
