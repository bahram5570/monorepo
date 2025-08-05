import m from 'moment-jalaali';

export const currentDate = () => {
  const moment = m();

  const jDate = moment.format('jYYYY/jMM/jDD');
  const jList = jDate.split('/');
  const jYear = Number(jList[0]);
  const jMonth = Number(jList[1]);
  const jDay = Number(jList[2]);

  const gDate = moment.format('YYYY-MM-DD');
  const gList = gDate.split('-');
  const gYear = Number(gList[0]);
  const gMonth = Number(gList[1]);
  const gDay = Number(gList[2]);

  return { jDate, jYear, jMonth, jDay, gDate, gYear, gMonth, gDay };
};

export const toJalaliData = (d: string) => {
  return m(d, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
};

export const toGregorianData = (d: string) => {
  return m(d, 'jYYYY/jMM/jDD').format('YYYY-MM-DD');
};

export const jalaaliMonthNames = (m: number) => {
  const list = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  return list[m];
};

export const jalaaliWeekNames = (d: number) => {
  const list = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
  return list[d];
};

export const jalaaliScriptDate = (d: string) => {
  const info = d.split('/');
  const script = `${Number(info[2])} ${jalaaliMonthNames(Number(info[1]) - 1)} ${info[0]}`;
  return script;
};
