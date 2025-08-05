export enum CalendarTypeEnum {
  Jalali = 0,
  Gregorian = 1,
}

export const DATE_SEPERATOR_REGEX = /[-\/]/;

export const JALALI_START_DATE = '1350/01/01';
export const GREGORIAN_START_DATE = '1970-01-01';

// # PREGNANCY_INTERVAL قبلا 280 روز بوده اما در انتخاب 280 روزمین وارد روز سفید میشدیم برای همون یک واحد کم کردیم که محدوده انتخاب درست شود
export const PREGNANCY_INTERVAL = 279;
export const PERIOD_INTERVAL = 180;

export const WEEK_LIST = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
export const JALALI_MONTH_LIST = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];
export const GREGORIAN_FARSI_MONTH_LIST = [
  'ژانویه',
  'فوریه',
  'مارس',
  'آوریل',
  'مه',
  'ژوئن',
  'ژوئیه',
  'آگوست',
  'سپتامبر',
  'اکتبر',
  'نوامبر',
  'دسامبر',
];
