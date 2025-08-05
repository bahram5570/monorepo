'use client';

import { COLORS_LIST } from '@theme/colors';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { PERSIAN_NAME_DICTIONARY } from '../constants';

const AlphabetBtns = () => {
  const dataEntries = Object.entries(PERSIAN_NAME_DICTIONARY);

  const persianAlphabetsList = dataEntries.map((item) => ({
    label: item[1].category,
    value: item[0],
  }));

  return (
    <div className="w-full flex flex-col gap-2 md:gap-3  mx-auto px-3 pb-12">
      <CustomTypography tagType="h2" fontSize="Headline_Medium" color={'Neutral_OnBackground'}>
        اسم دختر جدید و شیک بر اساس حروف الفبا(همراه با ریشه و معنی)
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" color={'Surface_InverseSurface'}>
        وقتی دنبال اسم دخترانه می‌گردی، یکی از بهترین راه‌ها اینه که از حروف الفبا شروع کنی. اینطوری انتخاب‌ها منظم‌تر و
        پیدا کردن زیباترین و با کلاس‌ترین اسم دختر راحت‌تر می‌شه. تو هر بخش، ۲۰ تا اسم دخترانه گذاشتیم که با اون حرف
        شروع می‌شن و می‌تونی کلی گزینه جذاب و جدید پیدا کنی، فقط کافیه روی حرف مورد نظرت کلیک کنی:
      </CustomTypography>

      <div
        className="w-full sm:max-w-[390px] mx-auto rounded-2xl overflow-hidden "
        style={{ backgroundColor: COLORS_LIST.Pink_300 }}
      >
        <div
          className=" rounded-b-[100%] pt-4 pb-2 text-center h-[70px]"
          style={{ background: 'linear-gradient(180deg, #FEF2F5 -329.89%, #FFDDE6 100%)' }}
        >
          <CustomTypography fontSize="Title_Small" color={'Pink_900'}>
            فیلتر براساس حروف
          </CustomTypography>
        </div>
        <div className="grid grid-cols-5 gap-2 px-2 py-2">
          {persianAlphabetsList.map((item) => {
            return (
              <CustomLink
                key={item.value}
                href={`#${item.value}`}
                style={{ backgroundColor: COLORS_LIST.Pink_100 }}
                className=" w-14 h-14 rounded-xl flex items-center justify-center"
              >
                <CustomTypography fontSize="Title_Small" color={'Pink_800'} className="!underline !underline-offset-2">
                  {item.label}
                </CustomTypography>
              </CustomLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AlphabetBtns;
