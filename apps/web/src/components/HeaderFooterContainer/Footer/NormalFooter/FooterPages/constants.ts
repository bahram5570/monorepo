import { FooterPagesListTypes } from './types';

export const FOOTER_PAGES_LIST: FooterPagesListTypes = [
  {
    groupName: 'صفحات سایت',
    pages: [
      { title: 'صفحه اصلی', linkTo: '/', smallScreenOrder: 1 },
      { title: 'فرصت‌های شغلی', linkTo: '/careers', smallScreenOrder: 5 },
      { title: 'دانلودها', linkTo: '/download', smallScreenOrder: 3 },
      { title: 'درباره‌ی ما', linkTo: '/aboutUs', smallScreenOrder: 2 },
      { title: 'تماس با ما', linkTo: '/contactUs', smallScreenOrder: 4 },
    ],
  },

  {
    groupName: 'خدمات ایمپو',
    pages: [
      { title: 'تقویم قاعدگی', linkTo: '/landing/tracker', smallScreenOrder: 1 },
      { title: 'اقدام به بارداری', linkTo: '/landing/intention', smallScreenOrder: 2 },
      { title: 'مراقبت بارداری', linkTo: '/landing/pregnancyLanding', smallScreenOrder: 3 },
      { title: 'مادر و کودک', linkTo: '/landing/breastfeeding', smallScreenOrder: 4 },
    ],
  },

  {
    groupName: 'محصولات ایمپو',
    pages: [
      { title: 'ایمپو آقایان', linkTo: '/men', smallScreenOrder: 2 },
      // { title: 'ایمپوشاپ', linkTo: 'https://imposhop.app', smallScreenOrder: 1 },
    ],
  },
];
