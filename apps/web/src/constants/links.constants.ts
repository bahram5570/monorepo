import { HEADER_LINKS_TYPES } from '@components/HeaderFooterContainer/Header/types';

export const STAGE_URL = 'http://195.88.208.143:8080';
export const SSL_STAGE_URL = 'https://stage.weareimpo.ir';
export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL || '';
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || '';

export const OLD_OPEN_APP_LINKS = ['/privacy.html', '/impoMenManual.html'];
export const EXCLUDE_EXTENSIONS = [
  'js',
  'css',
  'png',
  'jpg',
  'jpeg',
  'webp',
  'heic',
  'gif',
  'svg',
  'ico',
  'woff',
  'woff2',
  'ttf',
  'eot',
  'map',
];

// # Android_Men
export const MYKET_LINK_MEN_URL = 'https://myket.ir/app/ir.duck.impomen';
export const CAFEBAZAAR_LINK_MEN_URL = 'https://cafebazaar.ir/app/ir.duck.impomen';
export const DIRECT_LINK_MEN_URL = process.env.NEXT_PUBLIC_DIRECT_LINK_MEN_URL || '';

// # IOS_Men
export const APP_STORE_LINK_MEN_URL = 'https://apps.apple.com/us/app/impo-men/id6740815518';
export const PWA_LINK_MEN_URL = 'https://man.impo.app/';

// # Android_Women
export const DIRECT_LINK_WOMEN_URL = process.env.NEXT_PUBLIC_DIRECT_LINK_WOMEN_URL || '';
export const MYKET_LINK_WOMEN_URL = 'https://myket.ir/app/ir.duck.impo';
export const CAFEBAZAAR_LINK_WOMEN_URL = 'https://cafebazaar.ir/app/ir.duck.impo';

// # IOS_Women
export const APP_STORE_LINK_WOMEN_URL = 'https://apps.apple.com/us/app/impo-health/id6736879093';
export const PWA_LINK_WOMEN_URL = process.env.NEXT_PUBLIC_PWA_URL || '';

export const HEADER_LINKS_LIST: HEADER_LINKS_TYPES = [
  {
    title: 'خدمات ایمپو',
    linkTo: [
      { title: 'بارداری', linkTo: '/landing/pregnancyLanding' },
      { title: 'پریود و پیشگیری', linkTo: '/landing/tracker' },
      { title: 'اقدام به بارداری', linkTo: '/landing/intention' },
      { title: 'شیردهی', linkTo: '/landing/breastfeeding' },
      { title: 'همدلی', linkTo: '/sympathy' },
    ],
  },
  {
    title: 'ابزارهای آنلاین',
    linkTo: [
      { title: 'محاسبه سن بارداری و تقویم  بارداری', linkTo: '/calendarOfPregnancy' },
      { title: 'تست حاملگی آنلاین', linkTo: '/landing/pregnancy' },
      { title: 'محاسبه آنلاین تخمک گذاری', linkTo: '/ovulation' },
      { title: 'محاسبه آنلاین سیکل قاعدگی', linkTo: '/menstrual-cycle' },
      { title: 'ابزار انتخاب اسم دختر', linkTo: '/landing/girl-name' },
      { title: 'ابزار انتخاب اسم پسر', linkTo: '/landing/boy-name' },
    ],
  },
  {
    title: 'مجله سلامت',
    linkTo: [
      { title: 'اقدام به بارداری', linkTo: '/category/getting-pregnant' },
      { title: 'بارداری و زایمان', linkTo: '/category/pregnancy-and-childbirth' },
      { title: 'پیشگیری از بارداری', linkTo: '/category/preventing-pregnancy' },
      { title: 'پریود و قاعدگی', linkTo: '/category/period' },
      { title: 'سکس‌تراپی', linkTo: '/category/sex-therapy' },
      { title: 'روانشناسی', linkTo: '/category/psychology' },
      { title: 'سلامت بانوان', linkTo: '/category/womens-health' },
      { title: 'سلامت آقایان', linkTo: '/category/hello-gentlemen' },
      { title: 'همدلی و رابطه عاطفی', linkTo: '/category/relationship' },
      { title: 'بیماری‌ها', linkTo: '/category/diseases' },
    ],
  },
  { title: 'ایمپو آقایان', linkTo: '/men' },
];
