import { DayTypeEnums } from '../pages/mainRoutes/calendar/__hooks__/useCalendarGetData/CalendarEnums';
import { SignsListTypes } from './types';

export const ICONS_WIDTH = 56;

export const SIGNS_LIST: SignsListTypes = {
  9: {
    title: 'نشانه‌های بارداری',
    exactDayType: [DayTypeEnums.Pregnancy, DayTypeEnums.SecondaryPregnancy],
    signs: {
      0: {
        title: 'تهوع صبحگاهی',
      },
      1: {
        title: 'سوزش معده',
      },
      2: {
        title: 'هموروئید',
      },
      3: {
        title: 'دیابت بارداری',
      },
      4: {
        title: 'مسمومیت حاملگی',
      },
      5: {
        title: 'یبوست',
      },
      6: {
        title: 'فشار خون',
      },
      7: {
        title: 'کهیر بارداری',
      },
      8: {
        title: 'تکرر ادرار',
      },
      9: {
        title: 'کمر درد',
      },
      10: {
        title: 'ورم پا',
      },
      11: {
        title: 'اضافه وزن زیاد',
      },
    },
    order: 0,
  },
  10: {
    title: 'نشانه‌های نوزاد',
    exactDayType: [DayTypeEnums.Breastfeeding, DayTypeEnums.SecondaryBreastfeeding],
    signs: {
      0: {
        title: 'زردی',
      },
      1: {
        title: 'کولیک',
      },
      2: {
        title: 'نفخ',
      },
      3: {
        title: 'کمبود وزن',
      },
      4: {
        title: 'حساسیت به پوشک',
      },
    },
    order: 1,
  },
  11: {
    title: 'نشانه‌های مادر',
    exactDayType: [DayTypeEnums.Breastfeeding, DayTypeEnums.SecondaryBreastfeeding],
    signs: {
      0: {
        title: 'حجم کم شیر',
      },
      1: {
        title: 'سفت شدن سینه',
      },
      2: {
        title: 'التهاب و زخم سینه',
      },
      3: {
        title: 'افسردگی پس از زایمان',
      },
      4: {
        title: 'ترک پوستی',
      },
      5: {
        title: 'لکه‌های پوستی',
      },
      6: {
        title: 'اختلال خواب',
      },
      7: {
        title: 'ضعف بدنی',
      },
      8: {
        title: 'هموروئید',
      },
    },
    order: 2,
  },
  0: {
    title: 'حس و حال',
    signs: {
      0: {
        title: 'خواب آلودگی',
      },
      1: {
        title: 'پرانرژی',
      },
      2: {
        title: 'کم‌انرژی',
      },
      3: {
        title: 'خوشحال',
      },
      4: {
        title: 'عدم تمرکز',
      },
      5: {
        title: 'افزایش میل جنسی',
      },
      6: {
        title: 'کاهش میل جنسی',
      },
    },
    order: 3,
  },
  1: {
    title: 'علائم روحی',
    signs: {
      0: {
        title: 'اضطراب',
      },
      1: {
        title: 'میل به تنهایی',
      },
      2: {
        title: 'ناامیدی',
      },
      3: {
        title: 'افسردگی',
      },
      4: {
        title: 'زودرنجی',
      },
      5: {
        title: 'غم',
      },
      6: {
        title: 'بی‌قراری',
      },
      7: {
        title: 'خشم',
      },
      8: {
        title: 'نوسان خلق',
      },
      9: {
        title: 'افکار خودکشی',
      },
    },
    order: 4,
  },
  2: {
    title: 'دردهای جسمی',
    signs: {
      0: {
        title: 'درد لگن',
      },
      1: {
        title: 'درد پستان',
      },
      2: {
        title: 'سر درد',
      },
      3: {
        title: 'دل درد',
      },
      4: {
        title: 'کمردرد',
      },
      5: {
        title: 'درد بعد از نزدیکی',
      },
      6: {
        title: 'درد هنگام مدفوع',
      },
      7: {
        title: 'خون در ادرار',
      },
      8: {
        title: 'دندان درد',
      },
      9: {
        title: 'درد واژن',
      },
      10: {
        title: 'درد شدید پریود',
      },
      11: {
        title: 'پا درد',
      },
    },
    order: 5,
  },
  3: {
    title: 'علائم جسمی',
    signs: {
      0: {
        title: 'ریزش مو',
      },
      1: {
        title: 'موی زاید',
      },
      2: {
        title: 'کوفتگی',
      },
      3: {
        title: 'حساسیت پستان',
      },
      4: {
        title: 'گرگرفتگی',
      },
      5: {
        title: 'لرز',
      },
      6: {
        title: 'بی‌اشتهایی',
      },
      7: {
        title: 'پرخوری',
      },
      8: {
        title: 'استفراغ',
      },
      9: {
        title: 'اسهال',
      },
      10: {
        title: 'یبوست',
      },
      11: {
        title: 'گرفتگی عضلات',
      },
      12: {
        title: 'تکرر ادرار',
      },
      13: {
        title: 'سرگیجه',
      },
      14: {
        title: 'حساسیت لثه',
      },
      15: {
        title: 'حالت تهوع',
      },
      16: {
        title: 'سوزش واژن',
      },
      17: {
        title: 'خشکی واژن',
      },
      18: {
        title: 'بثورات پوستی واژن',
      },
      19: {
        title: 'آلرژی',
      },
      20: {
        title: 'قرمزی پوست پستان',
      },
      21: {
        title: 'تورم پستان',
      },
      22: {
        title: 'لکه بینی',
      },
      23: {
        title: 'تعریق شبانه',
      },
      24: {
        title: 'ترک خوردن پستان',
      },
      25: {
        title: 'آکنه',
      },
    },
    order: 6,
  },
  4: {
    title: 'ترشحات',
    signs: {
      0: {
        title: 'خشک',
      },
      1: {
        title: 'آبکی',
      },
      2: {
        title: 'خامه ای',
      },
      3: {
        title: 'چسبناک',
      },
      4: {
        title: 'پنیری',
      },
      5: {
        title: 'سفید',
      },
      6: {
        title: 'سبز',
      },
      7: {
        title: 'زرد',
      },
      8: {
        title: 'سفید',
      },
      9: {
        title: 'خاکستری',
      },
      10: {
        title: 'صورتی',
      },
    },
    order: 7,
  },
  5: {
    title: 'خونریزی',
    signs: {
      0: {
        title: 'زیاد',
      },
      1: {
        title: 'متوسط',
      },
      2: {
        title: 'کم',
      },
      3: {
        title: 'خیلی کم',
      },
      4: {
        title: 'سیاه',
      },
      5: {
        title: 'قرمز',
      },
      6: {
        title: 'صورتی',
      },
      7: {
        title: 'قهوه‌ای',
      },
    },
    order: 8,
  },
  6: {
    title: 'رابطه جنسی',
    signs: {
      0: {
        title: 'سکس حفاظت نشده',
      },
      1: {
        title: 'سکس با کاندوم',
      },
      2: {
        title: 'قرص پیشگیری',
      },
      3: {
        title: 'قرص اورژانسی',
      },
      4: {
        title: 'سایر روشهای پیشگیری',
      },
    },
    order: 9,
  },
};
