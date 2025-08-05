import { SupportLinkGeneratorType } from './type';

export const SUPPORT_LINK_LIST: SupportLinkGeneratorType[] = [
  {
    discription: 'سوال یا مشکلت رو اینجا بنویس تا پشتیبان‌های ایمپو در اولین فرصت بهت پاسخ بدن',
    title: 'تیکت به پشتیبانی',
    link: '/protected/supportTicket',
    typeLink: 'internal',
  },
  {
    discription: 'جهت ارائه شکایات و گزارش ها میتونید از ساعت 9 تا 21 تماس بگیرید.',
    title: 'تماس تلفنی',
    typeLink: 'external',
    supportPhone: '',
  },
];
