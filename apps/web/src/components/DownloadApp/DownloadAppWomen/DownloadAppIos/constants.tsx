import AnarDooniIcon from '@assets/icons/downloads/anarDooni.svg';
import IAppIcon from '@assets/icons/downloads/iApps.svg';
import SibAppIcon from '@assets/icons/downloads/sibApp.svg';
import SibIraniIcon from '@assets/icons/downloads/sibIrani.svg';
import SibchehIcon from '@assets/icons/downloads/sibcheh.svg';

export const IRANIAN_STORES_LIST = [
  {
    title: 'سیبچه',
    icon: <SibchehIcon className="w-6" />,
    linkTo: 'https://sibche.com/applications/impo-',
    id: 'women-sibcheh',
  },
  {
    title: 'اناردونی',
    icon: <AnarDooniIcon className="w-6" />,
    linkTo: 'https://anardoni.com/ios/app/irduckimpo',
    id: 'women-anardooni',
  },
  {
    title: 'سیب ایرانی',
    icon: <SibIraniIcon className="w-6" />,
    linkTo: 'https://sibirani.com/apps/web-impo-app/',
    id: 'women-sibirani',
  },
  {
    title: 'سیب اپ',
    icon: <SibAppIcon className="w-6" />,
    linkTo: 'https://sibapp.com/applications/impo',
    id: 'women-sibapp',
  },
  {
    title: 'آی اپس',
    id: 'women-iapps',
    icon: <IAppIcon className="w-6" />,
    linkTo:
      'https://iapps.ir/app/%D8%A7%DB%8C%D9%85%D9%BE%D9%88-%D8%AA%D9%82%D9%88%DB%8C%D9%85-%D9%82%D8%A7%D8%B9%D8%AF%DA%AF%DB%8C-%D8%A8%D8%A7%D9%86%D9%88%D8%A7%D9%86/639058468',
  },
];

export const DOWNLOAD_MODAL_QUERY_NAME = 'downloadModalOpen';
